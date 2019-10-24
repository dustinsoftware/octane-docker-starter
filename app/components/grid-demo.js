import Component from '@ember/component';
import styles from './grid-demo-styles';
import { loadCss } from '../utils/lazy-css-load';
import grid from 'ag-grid-community/main';

export default class GridDemoComponent extends Component {
  didInsertElement() {
    this.initializeGrid(grid);
  }

  styles = styles;

  initializeGrid() {
    if (this.isDestroying) {
      return;
    }

    loadCss('/ag-grid.css');

    const gridOptions = {
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' }
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
      ]
    };
    this.gridInstance = new grid.Grid(this.element.querySelector('.grid-container'), gridOptions);
  }

  willDestroyElement() {
    if (this.gridInstance) {
      this.gridInstance.destroy();
    }
  }
}
