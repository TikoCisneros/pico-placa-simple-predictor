import { MODAL_TYPE } from '../types/main';
import { buildModalData } from './util';

describe('Util Main page tests', () => {
  it('should buildModalData to present info of restrictions', () => {
    const { title } = buildModalData(MODAL_TYPE.driveInfo);
    expect(title.includes('Pico y Placa')).toBeTruthy();
  });
  it('should buildModalData to present not restriction message', () => {
    const { title } = buildModalData(MODAL_TYPE.info, true);
    expect(title.includes('Terrific')).toBeTruthy();
  });
  it('should buildModalData to present restriction message', () => {
    const { title } = buildModalData(MODAL_TYPE.info, false);
    expect(title.includes('Sorry')).toBeTruthy();
  });
});