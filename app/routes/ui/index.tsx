import { LanguageEnum } from 'public/enums/languageEnum';
import { ThemeEnum } from 'public/enums/themeEnum';
import styled, { ThemeContext } from 'styled-components';
import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import Card from '~/components/common/Card';
import SvgLogo from '~/components/common/Icons/Logo';
import { Input } from '~/components/common/Input';
import { Switcher } from '~/components/common/Switcher';
import TabSwitcher from '~/components/common/Tabs';
import { Text } from '~/components/common/Text';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { BoxText, TranslateBox } from '~/components/lib/Navbar/styles';
import { useApp } from '~/hooks';

export default function Index() {
  const { userContext, setUserContext, t } = useApp();

  const LogoLink = styled.a`
    transition: all 0.15s ease-in;
    cursor: pointer;
    svg {
      transition: all 0.15s ease-in;
      color: ${({ theme }) => theme.ui.logoLinkColor};
      width: 92px;
    }
    &:hover {
      svg {
        color: ${({ theme }) => theme.ui.logoLinkHoverColor};
      }
    }
    @media (min-width: 1024px) {
      svg {
        width: 118px;
      }
    }
  `;

  const companies = [
    {
      id: '1',
      title: 'Apple company-1',
      vacancies: 100,
      image: 'images/homePage/apple.png',
    },
    {
      id: '2',
      title: 'Apple company-1',
      vacancies: 23,
      image: 'images/homePage/apple.png',
    },
    {
      id: '3',
      title: 'Apple company-2',
      vacancies: 0,
      image: 'images/homePage/apple.png',
    },
    {
      id: '4',
      title: 'Apple company-1',
      vacancies: 100,
      image: 'images/homePage/apple.png',
    },
    {
      id: '5',
      title: 'Apple company-1',
      vacancies: 23,
      image: 'images/homePage/apple.png',
    },
    {
      id: '6',
      title: 'Apple company-2',
      vacancies: 0,
      image: 'images/homePage/apple.png',
    },
  ];

  const news = [
    {
      id: '1',
      title: ' 1 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '2',
      title: '2 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '3',
      title: '3 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '4',
      title: '4 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '5',
      title: '5 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '6',
      title: '6 - Apple company-2',
      vacancies: 0,
      image: 'images/homePage/new.png',
    },
  ];

  const WrapperCardsCompanies = styled.div`
    align-items: 'stretch';
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 16px;

    @media (min-width: 768px) {
      display: flex;
      position: relative;
      flex-flow: row;
      flex-direction: row;
      gap: 14px;
      overflow: auto;
      overflow-y: hidden;
    }
  `;

  const WrapperCardsNews = styled.div`
    display: flex;
    position: relative;
    flex-flow: row;
    flex-direction: row;
    gap: 14px;
    overflow: auto;
    overflow-y: hidden;
    @media (min-width: 768px) {
      gap: 24px;
    }
    @media (min-width: 1024px) {
      gap: 40px;
    }
  `;

  function setTheme(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.value) {
      case ThemeEnum.Light:
        setUserContext((prevContext) => ({ ...prevContext!, theme: ThemeEnum.Light }));
        break;
      case ThemeEnum.Dark:
        setUserContext((prevContext) => ({ ...prevContext!, theme: ThemeEnum.Dark }));
        break;
      case ThemeEnum.Dora:
        setUserContext((prevContext) => ({ ...prevContext!, theme: ThemeEnum.Dora }));
        break;
    }
  }

  function setLang(language: LanguageEnum) {
    setUserContext((prevContext) => ({ ...prevContext!, language: language }));
  }

  const changeLanguage = () => {
    userContext?.language === LanguageEnum.TH
      ? setUserContext((prevContext) => ({ ...prevContext!, language: LanguageEnum.EN }))
      : setUserContext((prevContext) => ({ ...prevContext!, language: LanguageEnum.TH }));
  };

  function themeIsCheckedRadiobutton(value: string) {
    switch (value) {
      case ThemeEnum.Light:
        return userContext?.theme === ThemeEnum.Light;
      case ThemeEnum.Dark:
        return userContext?.theme === ThemeEnum.Dark;
      case ThemeEnum.Dora:
        return userContext?.theme === ThemeEnum.Dora;
    }
  }

  return (
    <CommonLayout>
      <Box flexDirection='column' padding='16px' gap='20px'>
        <Box flexDirection='row' gap='10px'>
          <Box>
            <Box
              flexDirection='column'
              onChange={setTheme}
              border='1px solid'
              borderRadius='5px'
              gap='10px'
              className='p-5'
            >
              <Text>Theme test</Text>
              <Box>
                <input
                  type='radio'
                  value='light'
                  id='light'
                  name='theme'
                  checked={themeIsCheckedRadiobutton('light')}
                />
                <label htmlFor='light' className='pl-1'>
                  Light
                </label>
              </Box>
              <Box>
                <input
                  type='radio'
                  value='dark'
                  id='dark'
                  name='theme'
                  checked={themeIsCheckedRadiobutton('dark')}
                />
                <label htmlFor='dark' className='pl-1'>
                  Dark
                </label>
              </Box>
              <Box>
                <input
                  type='radio'
                  value='dora'
                  id='dora'
                  name='theme'
                  checked={themeIsCheckedRadiobutton('dora')}
                />
                <label htmlFor='dora' className='pl-1'>
                  Dora
                </label>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              flexDirection='column'
              border='1px solid'
              borderRadius='5px'
              gap='10px'
              className='p-5'
            >
              <Text>Language test: {t('language')}</Text>
              <TranslateBox>
                <BoxText
                  style={{ cursor: 'pointer' }}
                  lang={LanguageEnum.TH}
                  selectedLang={userContext?.language ?? ''}
                  onClick={() => setLang(LanguageEnum.TH)}
                >
                  <Text>ภาษาไทย</Text>
                </BoxText>
                <Switcher
                  onChange={changeLanguage}
                  checked={userContext?.language === LanguageEnum.EN}
                  htmlLabel='lang'
                />
                <BoxText
                  style={{ cursor: 'pointer' }}
                  lang={LanguageEnum.EN}
                  selectedLang={userContext?.language ?? ''}
                  onClick={() => setLang(LanguageEnum.EN)}
                >
                  <Text>English</Text>
                </BoxText>
              </TranslateBox>
              <p>Greeting from Common: {t('greeting')}</p>
              <p>Title from Home: {t('home:title')}</p>
            </Box>
          </Box>

          <Box>
            <Box
              flexDirection='column'
              border='1px solid'
              borderRadius='5px'
              gap='10px'
              className='p-5'
            >
              <Text>User context test</Text>
              <Text>{JSON.stringify(userContext)}</Text>
            </Box>
          </Box>
        </Box>

        <Box flexDirection='column' gap='10px'>
          <Input background='#D9DBDE' placeholder='Cammmon' id='i_firstname' />

          <Button priority='primary'>
            <Text>Primary S</Text>
          </Button>

          <Button priority='secondary'>
            <Text>Secondary S</Text>
          </Button>

          <Button priority='small'>
            <Text>Small S</Text>
          </Button>

          <Button priority='primary' size='M'>
            <Text>Primary M</Text>
          </Button>

          <Button priority='secondary' size='M'>
            <Text>Secondary M</Text>
          </Button>

          <Button priority='chips' size='M'>
            <Text>Chips M</Text>
          </Button>

          <Button priority='chips'>
            <Text>Chips S</Text>
          </Button>
        </Box>
        <LogoLink>
          <SvgLogo />
        </LogoLink>

        <TabSwitcher />

        <WrapperCardsCompanies>
          {companies.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              vacancies={item.vacancies}
              variant='companies'
            />
          ))}
        </WrapperCardsCompanies>

        <Box margin='40px 0'>
          <WrapperCardsNews>
            {news.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
                variant='articles'
              />
            ))}
          </WrapperCardsNews>
        </Box>
      </Box>
    </CommonLayout>
  );
}
