import { h, Component, Prop, State, Listen, Element, getAssetPath } from '@stencil/core';

@Component({ tag: 'image-group' })
export class ImageGroup {
  @Prop() afterLoad: (images: NodeList) => void;

  @Element() element: HTMLDivElement;

  @State() private readonly totalImageCount: number = 17;
  @State() private renderedCount: number = 0;

  @Listen('load')
  private handleLoad() {
    this.renderedCount++;
  }

  private get fullyLoaded() {
    return this.totalImageCount === this.renderedCount;
  }

  public componentDidRender() {
    const explosionFrames = this.element.querySelectorAll('img');

    if (this.fullyLoaded) {
      this.afterLoad(explosionFrames);
    }
  }

  public render() {
    return (
      <div class="image-group" aria-hidden="true">
        {new Array(this.totalImageCount).fill(null).map((_, index) => {
          const src = getAssetPath(`../../assets/explosion-${index + 1}.gif`);

          return (
            <img src={src} role="presentation" onLoad={() => { this.handleLoad(); }} />
          );
        })}
      </div>
    );
  }
}
