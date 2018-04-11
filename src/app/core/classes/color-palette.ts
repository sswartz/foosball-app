export class ColorPalette  {
  id: string;
  title: string;
  colors: string[];
  page: number;
  remoteNumber: number;
  constructor() {
    this.colors = new Array(16);
  }
}
