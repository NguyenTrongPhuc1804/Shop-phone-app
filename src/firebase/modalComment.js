import {db, firebase} from '../firebase/firebase';
export const commentModal = {
  readComment: async (setListComment, idProduct) => {
    try {
      const data = await db
        .collection('list-comment')
        .where('idProduct', '==', idProduct)
        .onSnapshot(snapshot =>
          setListComment(
            snapshot.docs.map(doc => ({
              id: doc.id,
              idProduct: doc.data().idProduct,
              message: doc.data().message,
              name: doc.data().name,
              listCommentChid: doc.data().listCommentChid,
              createAt: doc.data().createAt.toDate().getTime(),
            })),
          ),
        );

      return data;
    } catch (e) {
      console.log(e.message);
    }
  },
};
