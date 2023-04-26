import { LanguageEnum } from 'public/enums/languageEnum';
import { ThemeEnum } from 'public/enums/themeEnum';
import type { FormEvent } from 'react';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import Card from '~/components/common/SlideCard';
import { Switcher } from '~/components/common/Switcher';
import TabSwitcher from '~/components/common/Tabs';
import { Text } from '~/components/common/Text';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { BoxText, TranslateBox } from '~/components/lib/Navbar/styles';
import { useApp } from '~/hooks';

export default function Index() {
  const { userContext, setUserContext, t } = useApp();

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
      title: ' 1 - The first Episode of NBT “Mee Kam Tob” Features MOL’s',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '2',
      title: '2 - The first Episode of NBT “Mee Kam Tob” Features MOL’s',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '3',
      title: '3 - The first Episode of NBT “Mee Kam Tob” Features MOL’s',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '4',
      title: '4 - The first Episode of NBT “Mee Kam Tob” Features MOL’s',
      date: '17.02.2023',
      image: 'images/homePage/new.png',
    },
    {
      id: '5',
      title: '5 - The first Episode of NBT “Mee Kam Tob” Features MOL’s',
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

  function setTheme(event: FormEvent<HTMLInputElement>) {
    switch (event.currentTarget.value) {
      case ThemeEnum.Light:
        setUserContext((prevContext) => ({ ...prevContext, theme: ThemeEnum.Light }));
        break;
      case ThemeEnum.Dark:
        setUserContext((prevContext) => ({ ...prevContext, theme: ThemeEnum.Dark }));
        break;
      case ThemeEnum.Dora:
        setUserContext((prevContext) => ({ ...prevContext, theme: ThemeEnum.Dora }));
        break;
    }
  }

  function setLang(language: LanguageEnum) {
    setUserContext((prevContext) => ({ ...prevContext, language }));
  }

  const changeLanguage = () =>
    userContext?.language === LanguageEnum.TH
      ? setUserContext((prevContext) => ({ ...prevContext, language: LanguageEnum.EN }))
      : setUserContext((prevContext) => ({ ...prevContext, language: LanguageEnum.TH }));

  function themeIsCheckedRadiobutton(value: string) {
    switch (value) {
      case ThemeEnum.Dark:
        return userContext?.theme === ThemeEnum.Dark;
      case ThemeEnum.Dora:
        return userContext?.theme === ThemeEnum.Dora;
      case ThemeEnum.Light:
      default:
        return userContext?.theme === ThemeEnum.Light;
    }
  }

  return (
    <CommonLayout>
      <Box flexDirection='column' padding='16px' gap='20px'>
        <Box flexDirection='row' gap='10px'>
          <Box>
            <Box
              flexDirection='column'
              border='1px solid'
              borderRadius='5px'
              gap='10px'
              className='p-5'
            >
              <Text>Theme test</Text>
              <Box>
                <label htmlFor='light' className='pl-1'>
                  <input
                    type='radio'
                    value='light'
                    id='light'
                    name='theme'
                    onChange={setTheme}
                    checked={themeIsCheckedRadiobutton('light')}
                  />
                  Light
                </label>
              </Box>
              <Box>
                <label htmlFor='dark' className='pl-1'>
                  <input
                    type='radio'
                    value='dark'
                    id='dark'
                    name='theme'
                    onChange={setTheme}
                    checked={themeIsCheckedRadiobutton('dark')}
                  />
                  Dark
                </label>
              </Box>
              <Box>
                <label htmlFor='dora' className='pl-1'>
                  <input
                    type='radio'
                    value='dora'
                    id='dora'
                    name='theme'
                    onChange={setTheme}
                    checked={themeIsCheckedRadiobutton('dora')}
                  />
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
          <Select
            background='#D9DBDE'
            values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
            entries={[
              ['1', 'test1-1'],
              ['2', 'test2-1'],
              ['3', 'test3-1'],
              ['4', 'test4-1'],
              ['5', 'test5-1'],
            ]}
            // onChange={([selected]) => null}
            placeholder='placeholder'
            id='1'
          />
          <Input background='#D9DBDE' placeholder='Common' id='i_firstname' />

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

        <TabSwitcher />

        <Box>
          {companies.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              vacancies={item.vacancies}
              variant='companies'
            />
          ))}
        </Box>

        <Box margin='40px 0'>
          <Box>
            {news.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
                variant='articles'
              />
            ))}
          </Box>
        </Box>
      </Box>
    </CommonLayout>
  );
}
