import { color_dark_blue, color_vasil } from 'public/styles/variables';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import Card from '~/components/common/Card';
import SvgLogo from '~/components/common/Icons/Logo';
import { Switcher } from '~/components/common/Switcher';
import TabSwitcher from '~/components/common/Tabs';
import { Text } from '~/components/common/Text';

export let handle = {
  i18n: 'home',
};

export default function Index() {
  let { i18n, t } = useTranslation('translation');

  const tabs = [
    {
      id: '1',
      label: 'Find job',
      content: 'Find job',
    },
    {
      id: '2',
      label: 'Find employer',
      content: 'Find employer',
    },
    {
      id: '3',
      label: 'companies',
      content: 'companies',
    },
  ];

  const LogoLink = styled.a`
    transition: all 0.15s ease-in;
    cursor: pointer;
    svg {
      transition: all 0.15s ease-in;
      color: ${color_dark_blue};
      width: 92px;
    }
    &:hover {
      svg {
        color: ${color_vasil};
      }
    }
    @media (min-width: 1024px) {
      svg {
        width: 118px;
      }
    }
  `;

  const changeLanguage = () => {
    lang === 'th' ? setLang('en') : setLang('th');
  };
  const [lang, setLang] = useState('en');
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

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
  ];

  return (
    <Box flexDirection='column' padding='80px' backgroundColor='#E2E3E3' gap='20px'>
      <Box flexDirection='column' border='1px solid' borderRadius='5px' gap='10px' className='p-3'>
        <Text>Language test: {t('language')}</Text>
        <Box flexDirection='row' alignItems='center' gap='16px'>
          <Box style={{ cursor: 'pointer' }} onClick={() => setLang('th')}>
            <Text>Thailnd</Text>
          </Box>
          <Switcher onChange={changeLanguage} checked={lang === 'en'} htmlLabel='lang' />
          <Box style={{ cursor: 'pointer' }} onClick={() => setLang('en')}>
            <Text>English</Text>
          </Box>
        </Box>
        <p>Greeting from Common: {t('greeting')}</p>
        <p>Title from Home: {t('title')}</p>
      </Box>

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

      <LogoLink>
        <SvgLogo />
      </LogoLink>

      <TabSwitcher tabs={tabs} />

      <Box flexDirection='row' gap='10px' alignItems='stretch'>
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
    </Box>
  );
}
