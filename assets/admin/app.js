// Add project specific javascript code here:
import {listItemActionRegistry} from 'sulu-admin-bundle/views';
import AlertNameItemAction from "./listItemActions/AlertNameItemAction";

listItemActionRegistry.add('app.alert_name', AlertNameItemAction);
