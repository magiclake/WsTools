/**
 * Created by m on 2018/6/15.
 */
import global from './global';

import wepy from 'wepy';

export default {
 hello(){
     return "heelo"
 }
/*
 getContact () {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve(m_contacts);
 });
 });
 },

 getRandomReply (id) {
 let template = m_reply[id];
 if (!template)
 template = m_reply['other'];

 let index = Math.random() * template.length >> 0;

 return new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve(template[index]);
 });
 });

 },
    // select * from history h
    // left join contact c
    // on (h.from == c.id or h.to == c.id)
    // where h.from = :id or h.to = :id or :id = '';
    // order by h.time asc;
    getHistory (id) {
        let history = wepy.getStorageSync('_wechat_history_') || m_history;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sorted = history.sort((a, b) => a.time - b.time);
                if (!id)
                    resolve(this.leftJoin(sorted, m_contacts))
                else {
                    resolve(this.leftJoin(sorted.filter((v) => v.from === id || v.to === id), m_contacts));
                }
            });
        });
    },
    // select *, (select msg from history h2 where h2.from = c.id or h2.to = c.id order by time desc limit 1) as lastmsg
    // from history h
    // left join contact c
    // on (h.from == c.id or h.to == c.id)
    // where h.from = :id or h.to = :id or :id = '';
    // order by h.time desc;
    getMessageList () {
        let history = wepy.getStorageSync('_wechat_history_') || m_history;
        return new Promise((resolve, reject) => {
            let distince = [];
            let rst = [];
            let sorted = history.sort((a, b) => b.time - a.time);
            sorted.forEach((v) => {
                if (v.from !== 'me' && distince.indexOf(v.from) === -1) {
                    distince.push(v.from);
                }
                if (v.to !== 'me' && distince.indexOf(v.to) === -1) {
                    distince.push(v.to);
                }
            });

            distince.forEach((v) => {
                let pmsg = sorted.filter((msg) => msg.to === v || msg.from === v);
                let lastmsg = pmsg.length ? pmsg[0].msg : '';

                rst.push({
                    id: v,
                    lastmsg: lastmsg,
                });
            });

            setTimeout(() => {
                resolve(this.leftJoin(rst, m_contacts));
            });
        });
    },

    leftJoin(original, contacts) {

        let contactObj = global.getContact();
        let rst = [];

        original.forEach((v) => {
            if (!v.id) {
                v.id = (v.from !== 'me') ? v.from : v.to;
            }
            if (v.id) {
                if (v.id !== 'me') {
                    v.name = contactObj[v.id].name;
                    v.icon = (wepy.env === 'web' ? './mocks/users/' : '../mocks/users/') + contactObj[v.id].id + '.png';
                }
                rst.push(v);
            }
        });
        return rst;
    },

    sendMsg (to, msg, type = 'text') {
        return this.msg('me', to, msg, type);
    },

    replyMsg (frm, msg, type = 'text') {
        return this.msg(frm, 'me', msg, type);
    },

    msg (frm, to, msg, type = 'text') {
        let history = wepy.getStorageSync('_wechat_history_') || m_history;
        let msgObj = {
            to: to,
            msg: msg,
            type: type,
            from: frm,
            time: +new Date()
        };

        history.push(msgObj);

        return new Promise((resolve, reject) => {
            wepy.setStorage({key: '_wechat_history_', data: history}).then(() => {
                resolve(msgObj);
            }).catch(reject);
        });
    },

    clearMsg (id) {
        return wepy.clearStorage();
    }
*/
}