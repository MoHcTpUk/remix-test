import { Fragment, useEffect, useState } from 'react';

import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import type { IPaginationRange } from '~/types/interfaces/IPaginationRange';

import { Box } from '../Box';
import Button from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { BoxPagination, PageButton } from './styles';

export function Pagination({
  currentPage,
  paginationRange,
  maxPages,
  setCurrentToken,
  setCurrentPage,
  handleSubmit,
  setMaxPageSize,
  maxPageSize,
  widthScreen,
  setCheckChangeSearch,
  checkChangeSearch,
}: {
  currentPage: number;
  paginationRange: IPaginationRange[] | undefined;
  maxPages?: number;
  setCurrentPage: (value: number) => void;
  setCurrentToken: (value?: string) => void;
  handleSubmit?: (scrollReset?: boolean) => void;
  setMaxPageSize: (value: number) => void;
  maxPageSize?: number;
  widthScreen?: number;
  setCheckChangeSearch?: (value: boolean) => void;
  checkChangeSearch?: boolean;
}) {
  const { theme, t } = useApp();
  const [initialRendering, setInitialRendering] = useState(false);

  const onNext = () => {
    const token = paginationRange?.find((item) => item.page === currentPage + 1)?.token;
    setCurrentPage(+currentPage + 1);
    setCurrentToken(token);
    if (setCheckChangeSearch && checkChangeSearch) {
      setCheckChangeSearch(false);
    }
  };

  const onPrevious = () => {
    const token = paginationRange?.find((item) => item.page === currentPage - 1)?.token;
    setCurrentPage(+currentPage - 1);
    setCurrentToken(token);
    if (setCheckChangeSearch && checkChangeSearch) {
      setCheckChangeSearch(false);
    }
  };

  const handlePageClick = (pageNumber: number, token?: string) => {
    setCurrentToken(token);
    setCurrentPage(pageNumber);
    if (setCheckChangeSearch && checkChangeSearch) {
      setCheckChangeSearch(false);
    }
  };

  const handleMaxPagesSize = () => {
    setMaxPageSize(+(maxPageSize || 0) + 10);
  };

  useEffect(() => {
    if (initialRendering && handleSubmit) {
      if (!checkChangeSearch) {
        handleSubmit(true);
      }
    } else {
      setInitialRendering(true);
    }
  }, [currentPage]);

  useEffect(() => {
    if (handleSubmit && maxPageSize && +maxPageSize !== 10) {
      handleSubmit();
    }
  }, [maxPageSize]);

  return maxPages && maxPages > 1 ? (
    <BoxPagination>
      {widthScreen && widthScreen < 1280 ? (
        <Button priority='secondary' onClick={handleMaxPagesSize}>
          <Text variant={TextVariantEnum.textBody2}>{t('user:show_more')}</Text>
        </Button>
      ) : (
        <Box flexDirection='row' gap='16px' alignItems='center'>
          {currentPage !== 1 && (
            <Button
              onlyIcon
              type='button'
              priority='tertiary'
              onClick={onPrevious}
              className='pagination__arrow'
              style={{ cursor: 'pointer', width: '32px', height: '32px' }}
            >
              <Icon name={IconEnum.left} color={theme.accentTextColor} />
            </Button>
          )}
          {paginationRange
            ?.filter((page, index, array) => array.findIndex((p) => p.page === page.page) === index) // Убираем дубликаты
            .map((pageNumber, index) => (
              <Fragment key={`${pageNumber.page}_${pageNumber.token}`}>
                {index === paginationRange.length - 1 &&
                  paginationRange[index - 1]?.page !== pageNumber.page - 1 && <Box>...</Box>}
                {pageNumber.token !== '' && ( // Добавлена проверка на пустой token
                  <PageButton
                    key={pageNumber.page}
                    onClick={() => handlePageClick(pageNumber.page, pageNumber?.token)}
                    disabled={currentPage === pageNumber.page}
                    active={currentPage === pageNumber.page}
                  >
                    <Text variant={TextVariantEnum.textBody2medium}>{pageNumber.page}</Text>
                  </PageButton>
                )}
                {pageNumber.page === 1 &&
                  paginationRange[index + 1]?.page !== pageNumber.page + 1 && <Box>...</Box>}
              </Fragment>
            ))}
          {currentPage !== maxPages && (
            <Button
              onlyIcon
              type='button'
              priority='tertiary'
              onClick={onNext}
              className='pagination__arrow'
              style={{
                cursor: 'pointer',
                width: '32px',
                height: '32px',
              }}
            >
              <Icon name={IconEnum.rightLine} color={theme.accentTextColor} />
            </Button>
          )}
        </Box>
      )}
    </BoxPagination>
  ) : null;
}
