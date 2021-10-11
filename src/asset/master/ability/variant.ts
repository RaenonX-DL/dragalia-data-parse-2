import {AbilityVariantType} from '../../../types/enums/abilityVariant';


type AbilityVariantProps = {
  type: AbilityVariantType,
  id: Array<number>,
  str: string,
  upValue: number,
};

export class AbilityVariant implements AbilityVariantProps {
  type: AbilityVariantType;

  id: Array<number>;
  str: string;

  upValue: number;

  constructor({type, id, str, upValue}: AbilityVariantProps) {
    this.type = type;
    this.id = id;
    this.str = str;
    this.upValue = upValue;
  }

  get otherAbilityId(): number | null {
    return this.type === AbilityVariantType.OTHER_ABILITY ? this.id[0] : null;
  }

  get triggeredActionConditionId(): number | null {
    return this.type === AbilityVariantType.CHANGE_STATE ? this.id[0] : null;
  }
}
