import { h, Component, State } from '@stencil/core';

import { size } from '../../constants';
import getContextFromFile from '../../utils/getContextFromFile';
import generateFile from '../../utils/generateFile';

@Component({ tag: 'rainbow-effect', styleUrl: 'rainbow-effect.scss' })
export class RainbowEffect {
  @State() private file: File = null;
  @State() private rainbowImage: string | null = null;
  @State() private uploading: boolean = false;
  @State() private alpha: string = '0.5';

  private async addEffect() {
    if (this.file == null) {
      return;
    }

    this.uploading = true;

    const hueArray = new Array(360 / 15).fill(15).map((e, i) => e * i);
    const contexts = await Promise.all(
      hueArray.map(async (hue) => {
        const context = await getContextFromFile(
          this.file, { hue, alpha: this.alpha }
        )

        return context;
      })
    );

    const url = await generateFile(contexts, { interval: 50 });

    this.rainbowImage = url;
    this.uploading = false;
  }

  private handleChange(e, target: 'alpha' | 'rainbowImage') {
    this.rainbowImage = null;

    if (target === 'alpha') {
      this.alpha = e.target.value;
    } else {
      this.file = (e.target as unknown as DataTransfer).files.item(0);
    }

    this.addEffect();
  }

  public render() {
    return (
      <section>
        <h2>
          Rainbow Effect
        </h2>
        <div>
          <img
            src={this.rainbowImage ?? ''}
            width={size}
            height={size}
            role="presentation"
          />
        </div>

        <fieldset>
          <label>
            <span>
              Alpha(0.1-1):&nbsp;
            </span>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.1}
              onChange={(e) => { this.handleChange(e, 'alpha'); }}
              value={this.alpha}
              disabled={this.uploading}
            />
          </label>

          <label class="output-label">
            <span>
              Alpha(0.1-1):&nbsp;
            </span>
            <output>
              {this.alpha}
            </output>
          </label>
        </fieldset>

        <label>
          <input
            id="rainbow-target"
            type="file"
            accept="image/*"
            onChange={(e) => { this.handleChange(e, 'rainbowImage'); }}
            disabled={this.uploading}
          />
          <span>
            Upload Image
          </span>
        </label>
      </section>
    );
  }
}
