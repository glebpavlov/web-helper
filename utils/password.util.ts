import * as md5 from 'md5';
import * as sha256 from 'js-sha256';
import * as btoa from 'btoa';

export class PasswordUtil {
    /**
     * генерирует пароль, говнокод
     *
     * @param name имя сервиса
     * @param salt соль пароля
     * @param len длина пароля
     **/
    public static generate(name: string, salt: string, len: number = 8): string | void {
        const saltedStr = `${name.toLocaleLowerCase()}...${salt}(((${len}...${salt}*****${name}&.d.d.g${name}`;
        for (let i = 0; i < (2048 * len); i++) {
            const str = sha256.sha256(md5(`${len} ++ ${saltedStr} ++-- ${i} (${i * i * len})`));
            const password = this.getMatchPassword(btoa(str).replace(/=/g, ''), len);
            if (password) {
                return password;
            }
        }
    }

    private static getMatchPassword(str: string, len: number): string {

        const minUpperCount = parseInt((len / 4).toString(), 10);
        const minLowestCount = parseInt((len / 4).toString(), 10);
        const minNumberCount = parseInt((len / 4).toString(), 10);

        for (const [index, char] of str.split('').entries()) {
            const currentPassword = str.slice(index, len + index);
            const upperCount = currentPassword.length - currentPassword.replace(/[A-Z]/g, '').length;
            const lowestCount = currentPassword.length - currentPassword.replace(/[a-z]/g, '').length;
            const numberCount = currentPassword.length - currentPassword.replace(/\d/g, '').length;
            if (upperCount >= minUpperCount && lowestCount >= minLowestCount && numberCount >= minNumberCount) {
                return currentPassword;
            }
        }
        return '';
    }
}