import './css/styles.css';
import './css/mobile-styles.css';

import { createCatalogPage } from './modules/createCatalogPage';
import { createBrandsSelect } from './modules/createBrandsSelect';
import { toggleMobileMenu } from './modules/mobile-menu-handler';

createCatalogPage();
createBrandsSelect();
