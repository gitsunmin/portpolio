const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .experience-scene1 {
    display: flex;
    flex-wrap: wrap;
  }

  .experience-scene1-chart {
    background-color: #f0f0f0;
  }

  .experience-scene1-description {
    background-color: #f0ff;
  }
`;

template.innerHTML = /* html */ `
  <div class="experience-scene1">
    <div class="experience-scene1-chart">
      <h2>Chart</h2>
    </div>
    <div class="experience-scene1-description">
      <h2>Description</h2>
    </div>
  </div>
`;

export default class HistoryScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {});
    });

    observer.observe(this);
  }
}
