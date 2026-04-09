/**
 * CE.SDK Cutout Lines Editor Starterkit - Main Entry Point
 *
 * A design editor with cutout line creation prominently featured.
 * Click on a shape and select "Create Cutout" from the canvas menu.
 *
 * @see https://img.ly/docs/cesdk/js/plugins/cutout-library/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initCutoutLinesEditor } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-cutout-lines-editor-user',

  // IMG.LY CDN
  baseURL: `https://cdn.img.ly/packages/imgly/cesdk-js/${CreativeEditorSDK.version}/assets`

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize Cutout Lines Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initCutoutLinesEditor(cesdk);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
