import React from 'react';
import { Screen } from '../../../src/sections';
import { Chip } from '../../../src/chip';
import { Heading, Paragraph, SubHeading, Subtitle } from '../../../src/chalk';
import { Stack, XStack, YStack } from '../../../src/stack';
import { Button } from '../../../src/button';
import { View } from 'react-native';

const Sink = ({ version, description, name, icon, screens, navigation }) => {
  return (
    <Screen space={1} scroll={true}>
      {/* we should be able to pass in theme values into this screen and then individual ones inside of each component to override */}
      <Screen.header>
        <Stack spaceX={1}>
          <YStack space={1}>
            <Chip>VERSION {version}</Chip>
            <Heading>{name}</Heading>
            <XStack>
              {icon}
              <Paragraph style={{ color: 'grey' }}>{description}</Paragraph>
            </XStack>
          </YStack>
        </Stack>
      </Screen.header>
      <Screen.content>
        <Stack spaceX={1}>
          <>
            {screens.map((screen, index) => {
              return (
                <YStack space={0.5}>
                  <Subtitle>{screen.title}</Subtitle>
                  <XStack
                    space={0.5}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                    }}
                  >
                    {screen.data.map((component, index) => {
                      return (
                        <Button
                          onPress={() => {
                            navigation.navigate(component.slug);
                          }}
                          color="#ff5252"
                          label={component.name}
                        />
                      );
                    })}
                  </XStack>
                </YStack>
              );
            })}
          </>
        </Stack>
      </Screen.content>
      {/* <Screen.footer>
        <Text>Sink {version}</Text>
      </Screen.footer> */}
    </Screen>
  );
};

export default Sink;
