import { h, Component, State, Listen, getAssetPath } from '@stencil/core';

import { size } from '../../constants';
import getContextFromFile from '../../utils/getContextFromFile';
import generateFile from '../../utils/generateFile';

@Component({ tag: 'explosion-maker', styleUrl: 'explosion-maker.scss' })
export class ExplosionMaker {
  @State() private explosionImage: string | null = null;
  @State() private uploading: boolean = false;
  @State() private emptyImage: HTMLImageElement = null;
  @State() private animationFrames : NodeList | null = null;

  @Listen('load')
  private handleLoad(e) {
    this.emptyImage = e.currentTarget;
  }

  private handleChange = async (e: Event) => {
    this.uploading = true;
    this.explosionImage = null;

    const file = (e.target as unknown as DataTransfer).files.item(0);
    const context = await getContextFromFile(file);

    const url = await generateFile(context, { emptyImage: this.emptyImage!, animationFrames: this.animationFrames });

    this.explosionImage = url;

    this.uploading = false;
  }

  private afterLoad = (nodeList: NodeList) => {
    this.animationFrames = nodeList;
  };

  public render() {
    return (
      <section>
        <h2>
          Explosion Effect
        </h2>
        <div aria-hidden="true">
          <img
            class="empty-image"
            width={size}
            height={size}
            src={getAssetPath('../../assets/empty.gif').replace(/^\//, '')}
            role="presentation"
            onLoad={(e) => { this.handleLoad(e); }}
          />
        </div>
        <image-group afterLoad={this.afterLoad}></image-group>
        <div>
          <img
            src={this.explosionImage ?? ''}
            width={size}
            height={size}
            role="presentation"
          />
        </div>
        <label>
          <input
            id="explosion-target"
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
