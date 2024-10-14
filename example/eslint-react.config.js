import configMoqada from 'eslint-config-moqada';
import configMoqadaBrowser from 'eslint-config-moqada/browser';
import configMoqadaReact from 'eslint-config-moqada/react';

export default [...configMoqada, ...configMoqadaBrowser, ...configMoqadaReact];
