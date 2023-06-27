'use client';

import { Stack, TamaguiProvider, Text } from 'tamagui';
import config from '../tamagui.config';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Text>hello</Text>
      </Stack>
    </TamaguiProvider>
  );
}
