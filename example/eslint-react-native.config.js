import configMoqada from 'eslint-config-moqada';
import configMoqadaReactNative from 'eslint-config-moqada/react-native';
import configMoqadaFlow from 'eslint-config-moqada/flow';
import configMoqadaflowJsdoc from 'eslint-config-moqada/flow-jsdoc';

export default [
  ...configMoqada,
  ...configMoqadaReactNative,
  ...configMoqadaFlow,
  ...configMoqadaflowJsdoc
];
