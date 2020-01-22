import { h, Component, State } from '@stencil/core';

import { size } from '../../constants';
import getContextFromFile from '../../utils/getContextFromFile';
import generateFile from '../../utils/generateFile';

@Component({ tag: 'rainbow-effect', styleUrl: 'rainbow-effect.scss' })
export class RainbowEffect {
  @State() private rainbowImage: string | null = null;
  @State() private uploading: boolean = false;

  private handleChange = async (e: Event) => {
    this.uploading = true;
    this.rainbowImage = null;

    const file = (e.target as unknown as DataTransfer).files.item(0);

    // const hueArray = new Array(36).fill(10).map((e, i) => e * i);
    const hueArray = new Array(360 / 15).fill(15).map((e, i) => e * i);
    const contexts = await Promise.all(
      hueArray.map(async (hue) => {
        const context = await getContextFromFile(
          file, { hue }
        )

        return context;
      })
    );

    const url = await generateFile(contexts, { interval: 50 });

    this.rainbowImage = url;
    this.uploading = false;
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
        <label>
          <input
            id="rainbow-target"
            type="file"
            accept="image/*"
            onChange={this.handleChange}
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
