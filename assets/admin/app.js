// Add project specific javascript code here:
import {formToolbarActionRegistry} from 'sulu-admin-bundle/views';
import GenerateNameToolbarAction from "./formToolbarActions/GenerateNameToolbarAction";

formToolbarActionRegistry.add('app.generate_name', GenerateNameToolbarAction);
