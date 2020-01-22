import { h, Component, State, Listen } from '@stencil/core';

import { size } from '../../constants';
import generateFile from '../../utils/generateFile';
import getContextFromText from '../../utils/getContextFromText';

const fontFamilies = ['monospace', 'Lato', 'Nanum Gothic', 'Noto Sans KR'] as const;
type FontFamlies = typeof fontFamilies[number];

@Component({ tag: 'text-carousel', styleUrl: 'text-carousel.scss' })
export class TextCarousel {
  @State() private textImage: string | null = null;
  @State() private text: string = '';
  @State() private fgColor: string = '#000000';
  @State() private bgColor: string = '#ffffff';
  @State() private fontFamily: FontFamlies = 'monospace';
  @State() private interval: number = 300;
  @State() private uploading: boolean = false;
  @State() private yPos: string = '0';

  @Listen('submit')
  private async handleSubmit() {
    if (this.text.length === 0) {
      return alert('Please input.');
    }

    this.uploading = true;
    this.textImage = null;

    const textArray = this.text.split('');

    const contexts = await Promise.all(
      textArray.map(async (text) => {
        const context = await getContextFromText(
          text,
          this.fgColor,
          this.bgColor,
          this.fontFamily,
          this.yPos
        );

        return context;
      })
    );

    const url = await generateFile(contexts, { interval: this.interval });

    this.textImage = url;

    this.uploading = false;
  }

  @Listen('change')
  private handleChange(e, target: 'text' | 'fgColor' | 'bgColor' | 'fontFamily' | 'interval' | 'yPos') {
    if (target === 'interval') {
      this[target] = Number(e.target.value.replace(/\D/g, ''));
    } else {
      this[target] = e.target.value;
    }
  }

  public render() {
    return (
      <section>
        <h2>
          Text Carousel
        </h2>
        <form onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }}>
          <output>
            <img
              src={this.textImage ?? ''}
              width={size}
              height={size}
              role="presentation"
            />
          </output>

          <fieldset>
            <label>
              <span>
                Text:&nbsp;
              </span>
              <input
                type="text"
                value={this.text}
                onChange={(e) => { this.handleChange(e, 'text'); }}
                placeholder="Will be shown up one by one"
              />
            </label>

            <label>
              <span>
                Text Color:&nbsp;
              </span>
              <input
                type="color"
                value={this.fgColor}
                onChange={(e) => { this.handleChange(e, 'fgColor'); }}
              />
            </label>

            <label>
              <span>
                Background Color:&nbsp;
              </span>
              <input
                type="color"
                value={this.bgColor}
                onChange={(e) => { this.handleChange(e, 'bgColor'); }}
              />
            </label>

            <label>
              <span>
                Interval:&nbsp;
              </span>
              <input
                type="text"
                value={this.interval}
                onChange={(e) => { this.handleChange(e, 'interval'); }}
              />
            </label>

            <label>
              <span>
                Font:&nbsp;
              </span>
              <select onChange={(e) => { this.handleChange(e, 'fontFamily'); }}>
                {fontFamilies.map((fontFamily) => (
                  <option value={fontFamily} selected={this.fontFamily === fontFamily}>
                    {fontFamily}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>
                Y-Coord:&nbsp;
              </span>
              <input
                type="range"
                min={-30}
                max={30}
                step={1}
                onClick={(e) => { this.handleChange(e, 'yPos'); }}
                value={this.yPos}
              />
            </label>

            <label class="output-label">
              <span>
                Y-Coord:&nbsp;
              </span>
              <output>
                {this.yPos}
                px
              </output>
            </label>
          </fieldset>

          <button type="button" class="submit" disabled={this.uploading} onClick={() => { this.handleSubmit(); }}>
            Submit
          </button>
        </form>
      </section>
    );
  }
}
