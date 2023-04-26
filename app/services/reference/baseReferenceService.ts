import type { HttpResponse } from 'shared/client/http-client';

export abstract class BaseReferenceService {
  protected async fetchItems<TId, TDto>(
    cache: Map<TId, TDto>,
    getItemsFunc: () => Promise<HttpResponse<TDto[]>>,
  ) {
    if (cache.size === 0) {
      const items = await getItemsFunc();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
      items.data.forEach((item: any) => cache.set(item.id, item));
    }

    return cache;
  }
}
