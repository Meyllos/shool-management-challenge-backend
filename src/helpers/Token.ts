import jwt from 'jsonwebtoken';
import 'dotenv/config';

const { SECRETKEY } = process.env
/**
 * @author frank harerimana
 */
export default class SignedToken {
  /**
   * @param {*} email
   * @returns {*} registration token
   */
  registration(email: string): string {
    return jwt.sign({ email }, `${SECRETKEY}`, { expiresIn: '1d' }); // expires in 1 day
  }

  /**
   * @param {*} args
   * @returns {*} registration token
   */
  public static login(id: string) {
    return jwt.sign({ id }, `${SECRETKEY}`, { expiresIn: '1d' }); // expires in 1 day
  }
}

