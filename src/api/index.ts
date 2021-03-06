import dev from './dev';
import fat from './fat';
import uat from './uat';
import pro from './pro';


interface DefineApiType {
  [key: string]: any;
}

const getApi = (env: string) => {
  const apiObj: DefineApiType = {
    'development': dev,
    'integration': fat,
    'pre-production': uat,
    'production': pro,
  };
  return apiObj[env];
};

export const { prefix, iamPrefix, filefix } = getApi(process.env.NODE_ENV);
