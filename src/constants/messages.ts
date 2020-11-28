import { FetchGoodMorningType, UpdateGoodMorningType } from '../state/goodMornings/types';
import { Messages } from '../state/notifications';


export const messages: Messages = {
  [FetchGoodMorningType.FAILURE]: 'Ops, qualcosa è andato storto mentre cercavamo di recuperare i tuoi dolcissimi buongiornissimi!',
  [UpdateGoodMorningType.SUCCESS]: 'Il tuo buongiornissimo è stato modificato, adesso sembra molto meglio!',
  [UpdateGoodMorningType.FAILURE]: 'Ops, non siamo riusciti ad aggiornare il tuo buongiorno',
};