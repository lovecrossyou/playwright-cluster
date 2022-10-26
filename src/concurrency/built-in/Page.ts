
import * as playwright from 'playwright';

import { ResourceData } from '../ConcurrencyImplementation';
import SingleBrowserImplementation from '../SingleBrowserImplementation';

export default class Page extends SingleBrowserImplementation {

    protected async createResources(): Promise<ResourceData> {
        return {
            page: await (this.browser as playwright.Browser).newPage(),
        };
    }

    protected async freeResources(resources: ResourceData): Promise<void> {
        await resources.page.close();
    }

}
