import { type MutableRefObject } from 'react';

import { Modal } from '~/components/common/Modal';
import { useScreenWidth } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IFilter } from '~/types/interfaces/iFilters';

import Filter from '../Filter';

export default function FilterModal({
  visibility,
  setVisibility,
  dictionaries,
  filters,
  formRef,
  setMaxPageSize,
  setCurrentPage,
  setCurrentToken,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  dictionaries: IDictionaries | null;
  filters: IFilter;
  formRef: MutableRefObject<null>;
  setMaxPageSize?: (value: number) => void;
  setCurrentPage?: (value: number) => void;
  setCurrentToken?: (value?: string) => void;
}) {
  const widthScreen = useScreenWidth();

  return (
    <Modal
      variant='filter'
      visibility={widthScreen < 1280 ? visibility : false}
      setVisibility={setVisibility}
    >
      <Filter
        filters={filters}
        dictionaries={dictionaries}
        formRef={formRef}
        setMaxPageSize={setMaxPageSize}
        setCurrentPage={setCurrentPage}
        setCurrentToken={setCurrentToken}
      />
    </Modal>
  );
}
