import * as React from 'react';

import { DocumentsCopyView } from '@oiti/rn-liveness2d';
import InstructionsView from '../InstructionsView';

export default function Documentscopy({ navigation }: { navigation: any }) {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiRjc2MkRDRjc2MDM1QUQ3NkRFMzE0RDdFRjExNDI0RkQyfG9pdGkuZmFjZXRlYy5obWwiLCJlbXBDb2QiOiIwMDAwMDAwMDAxIiwiZmlsQ29kIjoiMDAwMDAwMjc2OSIsImNwZiI6IjU0MjczOTY2MDg1Iiwibm9tZSI6IjEzOUFBNUQ0QkY2QzlCMkIwMUI2OTFCMDExMjkxMTg4RUUwMjA3NENBMDBFRTI1MzY1QzczN0Y0NkFGNEU4NUU4RjFEREIwQjY4NjQ0RTgxNjU5MDc0QUVEOTU0ODU5OTU4ODFEMzlGRTBDRTAxRjI1ODZFQjQ5MDlCMThBNUJGfEFTSEFVQVMgQVNVSEFTSFUgQVNVSCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTkxIiwiZWFzeS1pbmRleCI6IkFBQUFFcnc0eHV3TVU5SDNGYXhHbWtzR1Z6TjY4M2JYNDNncVBqcUVTd2tzMk1HeGUyYlZESldpRjZhT3NBPT0iLCJrZXkiOiJUWFZqYUNCbGRtbHNJSE52YjI0Z2FHbG5hQ0JwYmlCb2IzQmxJR1J2SUhacFpYYz0iLCJleHAiOjE2NzkwNjIyNzEsImlhdCI6MTY3OTA2MTk3MX0.P3RGITQt8jkXf3eCZ-N7k7xMuRjA_ks1U3nPzSQlC7o';

  const options = {
    appkey: appKey,
    environment: '.HML',
    baseUrl: 'https://comercial.certiface.com.br:8443/',
    apparence: {
      backgroundColor: '#025951',
      loadingColor: '#0CF25D',
    },
    liveness3Dtext: {
      READY_HEADER_1: 'Prepare-se para seu',
      READY_HEADER_2: 'reconhecimento facial.',
      READY_MESSAGE_1: 'Posicione o seu rosto na moldura, aproxime-se',
      READY_MESSAGE_2: 'e toque em começar.',
      READY_BUTTON: 'Começar',

      RETRY_HEADER: 'Vamos tentar novamente?',
      RETRY_SUBHEADER: 'Siga o exemplo de foto ideal abaixo:',
      RETRY_MESSAGE_SMILE: 'Expressão Neutra, Sem Sorrir',
      RETRY_MESSAGE_LIGHTING: 'Evite reflexos e iluminação extrema.',
      RETRY_MESSAGE_CONTRAST: 'Limpe Sua Câmera',
      RETRY_YOUR_PICTURE: 'Sua foto',
      RETRY_IDEAL_PICTURE: 'Foto ideal',
      RETRY_BUTTON: 'Tentar novamente',

      RESULT_UPLOAD_MESSAGE: 'Enviando...',
      RESULT_SUCCESS_MESSAGE: 'Sucesso',

      FEEDBACK_CENTER_FACE: 'Centralize Seu Rosto',
      FEEDBACK_FACE_NOT_FOUND: 'Enquadre o Seu Rosto',
      FEEDBACK_FACE_NOT_LOOKING_STRAIGHT_AHEAD: 'Olhe Para Frente',
      FEEDBACK_FACE_NOT_UPRIGHT: 'Mantenha a Cabeça Reta',
      FEEDBACK_HOLD_STEADY: 'Segure Firme',
      FEEDBACK_MOVE_PHONE_AWAY: 'Afaste-se',
      FEEDBACK_MOVE_PHONE_CLOSER: 'Aproxime-se',
      FEEDBACK_MOVE_PHONE_TO_EYE_LEVEL: 'Telefone ao Nível dos Olhos',
      FEEDBACK_USE_EVEN_LIGHTING: 'Ilumine Seu Rosto Uniformemente',

      FEEDBACK_FRAME_YOUR_FACE: 'Encaixe Seu Rosto no Espaço Oval',
      FEEDBACK_HOLD_STEADY_1: 'Aguente Firme: 1',
      FEEDBACK_HOLD_STEADY_2: 'Aguente Firme: 2',
      FEEDBACK_HOLD_STEADY_3: 'Aguente Firme: 3',
      FEEDBACK_EYES_STRAIGHT_AHEAD: 'Olhe Para Frente',
      FEEDBACK_REMOVE_DARK_GLASSES: 'Tire Seus Óculos de Sol',
      FEEDBACK_NEUTRAL_EXPRESSION: 'Fique Neutro, Não Sorria',
      FEEDBACK_CONDITIONS_TOO_BRIGHT: 'Ambiente Muito Iluminado',
      FEEDBACK_BRIGHTEN_YOUR_ENVIRONMENT: 'Ambiente Muito Escuro',
    },
  };
  return (
    <DocumentsCopyView
      options={options}
      navigation={navigation}
      callbackView="Home"
      CustomInstructionView={<InstructionsView navigation={navigation} />}
      /* CustomPermissionView={CustomPermissionView} */
    />
  );
}
