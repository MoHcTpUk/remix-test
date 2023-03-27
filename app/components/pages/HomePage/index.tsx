import { memo } from 'react';
import { Text } from '~/components/common/Text';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { Component1 } from '~/components/lib/component1';
import { Component2 } from '~/components/lib/component2';

export const HomePage = memo(function HomePageMemoized(): JSX.Element {
  return (
    <CommonLayout>
      <Text>HomePage</Text>
      <Component1></Component1>
      <Component2></Component2>
    </CommonLayout>
  );
});
