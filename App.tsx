/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Grid accessibilityRole={'adjustable'}>
            <Row style={{paddingBottom: 10}}>
              <Col style={{backgroundColor: '#DCDCDC'}} />
              <Col accessible={true} style={{backgroundColor: '#DCDCDC'}}>
                <Text adjustsFontSizeToFit={true} style={{fontWeight: 'bold'}}>
                  Cantidad de Números Gratis que puedes elegir
                </Text>
              </Col>
              <Col accessible={true} style={{backgroundColor: '#DCDCDC'}}>
                <Text adjustsFontSizeToFit={true} style={{fontWeight: 'bold'}}>
                  Características de los números gratis
                </Text>
              </Col>
            </Row>
            <Row accessible={true}>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityRole={'header'}
                  style={{fontWeight: 'bold'}}>
                  Titulo 1
                </Text>
              </Col>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityHint="Cantidad de Números Gratis que puedes elegir 3">
                  3
                </Text>
              </Col>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityHint="Características de los números gratis Telcel Nacionales">
                  Telcel Nacionales.
                </Text>
              </Col>
            </Row>
            <Row accessible={true}>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityRole={'header'}
                  style={{fontWeight: 'bold'}}>
                  Titulo 2
                </Text>
              </Col>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityHint="Cantidad de Números Gratis que puedes elegir 3">
                  3
                </Text>
              </Col>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityHint="Características de los números gratis Telcel Nacionales">
                  Telcel Nacionales.
                </Text>
              </Col>
            </Row>
            <Row accessible={true}>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityRole={'header'}
                  style={{fontWeight: 'bold'}}>
                  Titulo 3
                </Text>
              </Col>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityHint="Cantidad de Números Gratis que puedes elegir 3">
                  3
                </Text>
              </Col>
              <Col>
                <Text
                  adjustsFontSizeToFit={true}
                  accessibilityHint="Características de los números gratis Telcel Nacionales">
                  Telcel Nacionales.
                </Text>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
