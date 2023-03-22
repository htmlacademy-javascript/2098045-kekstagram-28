import {createThumbnais} from './thumbnail.js';
import { renderGallery } from './gallery.js';
import {createNewPhotos} from './data.js';

// createThumbnai();
// renderGallery();

//кол-во (массив) фотографий
const thumbnailElements = createNewPhotos(25);
createThumbnais(thumbnailElements);

renderGallery(thumbnailElements);


