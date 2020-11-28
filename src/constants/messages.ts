import {
  FetchGoodMorningType,
  UpdateGoodMorningType,
  CreateGoodMorningType,
  RemoveGoodMorningType,
} from "../state/goodMornings";
import { Messages } from "../state/notifications";

export const messages: Messages = {
  [FetchGoodMorningType.FAILURE]:
    "Ops, qualcosa è andato storto mentre cercavamo di recuperare i tuoi dolcissimi buongiornissimi!",
  [CreateGoodMorningType.SUCCESS]:
    "Un nuovo buongiornissimo è pronto per essere condiviso col mondo",
  [CreateGoodMorningType.FAILURE]:
    "Oh no! Non siamo riusciti a creare il buongiornissimo, sarà forse un complotto dei poteri forti? Riprova più tardi",
  [UpdateGoodMorningType.SUCCESS]:
    "Il tuo buongiornissimo è stato modificato, adesso sembra molto meglio!",
  [UpdateGoodMorningType.FAILURE]:
    "Ops, non siamo riusciti ad aggiornare il tuo buongiorno",
  [RemoveGoodMorningType.SUCCESS]:
    "Il tuo buongiornissimo non rallegrerà più le giornate di nessuno",
  [RemoveGoodMorningType.FAILURE]:
    "Ops, non siamo riusciti ad eliminare it tuo buongiornissimo, forse è troppo bello? Riprova più tardi",
};
