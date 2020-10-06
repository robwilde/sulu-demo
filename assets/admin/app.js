// Add project specific javascript code here:
import {listFieldTransformerRegistry} from 'sulu-admin-bundle/containers';
import ColoredTextFieldTransformer from "./fieldTransformers/ColoredTextFieldTransformer";

listFieldTransformerRegistry.add('colored_text', new ColoredTextFieldTransformer());
