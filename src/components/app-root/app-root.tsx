import { h, Component, Host } from '@stencil/core';

@Component({ tag: 'app-root', styleUrl: 'app-root.scss', shadow: true })
export class AppRoot {
  public render() {
    return (
      <Host>
        <header>
          <h1>
            Animoji Maker 😜
          </h1>
        </header>
        <main>
          <explosion-maker />
          <hr />
          <text-carousel />
        </main>
        <footer>
          <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/dQ3sAxl" rel="noopener noreferrer">
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
            <span>
              Buy me a coffee
            </span>
          </a>
          <br />
          <a class="author" href="https://github.com/wonism" target="_blank" rel="noopener noreferrer">
            &copy;wonism
          </a>
        </footer>
        <aside>
          <github-corner />
        </aside>
      </Host>
    );
  }
}
