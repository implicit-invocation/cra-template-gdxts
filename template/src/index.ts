import { createStage, createViewport, PolygonBatch, createGameLoop, Texture } from 'gdxts';

const init = async () => {
  const stage = createStage();
  const canvas = stage.getCanvas();

  const viewport = createViewport(canvas, 500, 1000, {
    crop: false
  });
  const gl = viewport.getContext();
  const camera = viewport.getCamera();
  camera.setYDown(true);

  const batch = new PolygonBatch(gl);
  batch.setYDown(true);

  const texture = await Texture.load(gl, './icon.png');

  gl.clearColor(0, 0, 0, 1);
  createGameLoop((delta: number) => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.projectionView.values);
    batch.begin();
    batch.draw(texture, 0, 0, 200, 200);
    batch.end();
  });
};

init();

export {};
