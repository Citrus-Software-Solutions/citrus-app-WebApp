import { SingUpPersistence } from '../DTO/SingUpDTO'

interface SingUpProps {
  username: string
  email: string
  password: string
  street1: string
  street2: string
  city: string
  state: string
  zip: string
  company_name: string
  special_requirements: string
}

export class SingUpMapper {
  //methods
  public static ToPersistence(props: SingUpProps): SingUpPersistence {
    return {
      data_employer: {
        company_name: props.company_name,
        address: {
          street1: props.street1,
          street2: props.street2,
          city: props.city,
          state: props.state,
          zip: props.zip,
        },
        special_requirements: props.special_requirements,
      },
      data_user: {
        username: props.username,
        password: props.password,
        email: props.email,
      },
    }
  }
}
