import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Form, useLoaderData, useNavigation } from '@remix-run/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { DefaultTheme } from 'styled-components';
import { Box } from '~/components/common/Box';
import SvgMap from '~/components/common/Icons/Map';
import SvgSearch from '~/components/common/Icons/Search';

// export const meta: MetaFunction = () => {
//   return {
//     title: 'Remix: Search a TV show',
//     description: 'Search a TV show',
//   };
// };

// type ShowResult = {
//   id: string;
//   show: { name: string; url: string; image?: { medium: string } };
// };

// function typedBoolean<T>(value: T): value is Exclude<T, '' | 0 | false | null | undefined> {
//   return Boolean(value);
// }

// export const loader = async ({ request }: LoaderArgs) => {
//   const url = new URL(request.url);
//   const searchTerm = url.searchParams.get('search');

//   if (!searchTerm) {
//     return json({
//       status: 'emptySearch',
//       searchTerm: searchTerm || '',
//       items: [],
//     });
//   }

//   const result = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
//   const showResults = (await result.json()) as undefined | Array<ShowResult>;

//   if (!showResults || !showResults.length) {
//     return json({
//       status: 'noResults',
//       searchTerm,
//       items: [],
//     });
//   }

//   const data = {
//     status: 'resultsFound',
//     searchTerm,
//     items: showResults
//       .map((item) =>
//         item.show.image
//           ? {
//               id: item.id,
//               name: item.show.name,
//               image: item.show.image.medium,
//               url: item.show.url,
//             }
//           : null,
//       )
//       .filter(typedBoolean),
//   };

//   return json(data, {
//     headers: { 'Cache-Control': 'max-age=60, stale-while-revalidate=60' },
//   });
// };

const SearchContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;

  @media (min-width: 1024px) {
    flex-direction: row;
    border-radius: 0 0 16px 16px;
  }
`;

const MainInputSearch = styled.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 18px 26px 18px 65px;
  display: flex;
  flex-direction: row;
  width: 100%;
  &:nth-child(1) {
    border-bottom: 1px solid ${({ theme }) => theme.search.borderColor};
  }
  @media (min-width: 1024px) {
    border-radius: 0 0 0 16px;
    padding: 24px 14px 24px 76px;
    &:nth-child(1) {
      border-bottom: none;
    }
  }
`;

const PlaceInputSearch = styled.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 18px 26px 18px 65px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
  @media (min-width: 1024px) {
    padding: 24px 14px 24px 54px;
    border-radius: 0px 0px 16px 0px;
  }
`;

const WrapperInput = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0px 0px 8px 8px;
`;

const SvgWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 18px;
  left: 26px;
  @media (min-width: 1024px) {
    &:nth-child(1) {
      top: 24px;
      left: 40px;
    }
    &:nth-child(2) {
      top: 24px;
      left: 14px;
    }
  }
`;

export const MiddleBorder = styled.div`
  display: none;
  min-width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.search.middleBorderColor};
  padding: 16px 0px;
  margin-top: 16px;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Search = memo(function NavbarMemoized({ theme }: { theme: DefaultTheme }) {
  // const data = useLoaderData<typeof loader>();
  // const navagation = useNavigation();

  let { t } = useTranslation();

  return (
    <Form method='get' className='search-form'>
      <SearchContainer>
        <WrapperInput>
          <MainInputSearch placeholder={t('home:job_title_keywords_or_company')} type='text' />
          <SvgWrapper>
            <SvgSearch color={theme.search.svgColor} />
          </SvgWrapper>
        </WrapperInput>
        <MiddleBorder />

        <WrapperInput>
          <PlaceInputSearch placeholder='place' />
          <SvgWrapper>
            <SvgMap color={theme.search.svgColor} />
          </SvgWrapper>
        </WrapperInput>

        {/* <input
          // defaultValue={data.searchTerm}
          placeholder='Search a TV show...'
          autoComplete='off'
          name='search'
          type='search'
        /> */}
        {/* <button type='submit'>Search</button> */}
      </SearchContainer>
      {/* {navagation.state === 'submitting' ? (
        <div className='results'>
          {[...Array(8).keys()].map((_, i) => (
            <div className='placeholder' key={i} />
          ))}
        </div>
      ) : (
        <>
          {data.status === 'emptySearch' ? (
            <p className='info'>
              Start searching...{' '}
              <span role='img' aria-label='point up emoji'>
                ☝️
              </span>
            </p>
          ) : null}

          {data.status === 'noResults' ? (
            <p className='info'>
              Ooops, no results{' '}
              <span role='img' aria-label='crying emoji'>
                😢
              </span>
            </p>
          ) : null}

          {data.status === 'resultsFound' ? (
            <div className='results'>
              {data.items.map((item) => (
                <a
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                  className='placeholder'
                  key={item.id}
                >
                  <img src={item.image} alt={item.name} />
                </a>
              ))}
            </div>
          ) : null}
        </>
      )} */}
    </Form>
  );
});
