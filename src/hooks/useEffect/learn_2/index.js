//* LIBRARY
import React, { useEffect,useState } from "react";

//* STYLE
import "./style.css";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);
  const HandleScroll = () => {
    // Position Top
    const winScroll = document.documentElement.scrollTop;

    // Height all page 
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    /*
      Ví dụ, nếu winScroll là 500 và height là 1000, thì scrolled sẽ là (500 / 1000) * 100 = 50, 
      điều này có nghĩa là người dùng đã cuộn được 50% của trang web từ đầu.
    */
    setScroll(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);
  return (
    <>
      <div className="App">
        <div className="progressMainWrapper">
          <div
            className="progressMainStyle"
            style={{ width: `${scroll}%` }}
          ></div>
        </div>
        <h1>
          Truyện cười có những nét đặc trưng riêng không thể nhầm lẫn, bởi yếu
          tố gây cười cũng như nội dung hàm súc của nó. Đằng sau tiếng cười sảng
          khoái, người ta buộc phải ngẫm nghĩ, phải học hỏi và thay đổi. “Lợn
          cưới áo mới” mở đầu bằng tình huống trào phúng, Trong truyện, ta bắt
          gặp hai anh có tính khoe của gặp nhau. Một anh thì may được chiếc áo
          mới liền mặc ngay, mong được khen. Một anh thì muốn khoe với mọi người
          mình có con lợn cưới. Người có áo mới thì mặc ngay và đứng hóng ở cửa,
          đợi có ai đi qua người ta khen. Anh ta tức giận chỉ vì anh ta đã đứng
          từ sáng đến chiều mà chẳng có ai hỏi. Chi tiết “đứng hóng ở cửa” rất
          đắt. Nó lột tả được những điều đáng chê cười ở anh chàng này. Một cái
          áo mới thì có gì đâu mà đến nổi bỏ cả công ăn việc làm, chỉ “hóng” ở
          cửa để khoe. Khi có người mất lợn hỏi “Bác có thấy con lợn của tôi
          chạy qua đây không?” thì lẽ ra anh ta phải trả là “Tôi có thấy con lợn
          chạy qua đây” hoặc “Tôi không thấy con lợn nào chạy qua đây cả”. Câu
          trả lời của anh ta lại là: “Từ lúc tôi mặc cái áo mới này, tôi chẳng
          thấy con lợn nào chạy qua đây cả”. Với mọi người thì câu trả lời đó
          thừa thãi. Nhưng với anh ta thì có lẽ câu trả lời đó mới diễn đạt đúng
          đủ mục đích “khoe” của anh ta. Thật là buồn cười và lố bịch. Tình
          huống được xây dựng theo cách nói quá, lố bịch hơn so với hoàn cảnh
          thường thấy, nhằm mục đích nhấn mạnh vào bài học mà tác giả muốn đề
          cập. Đó là phê phán đả kích thói khoe khoang, khoe của. Đây là tính
          xấu phổ biến trong xã hội, thói khoe khoang khiến đối phương khó chịu
          và cảm giác không được thoải mái, thân thiện, dễ khiến chúng ta mất
          điểm trong mắt người khác. Trong câu chuyện, hai kẻ thích khoe khoang
          gặp nhau đã tạo thành một tình huống lố bịch, dở khóc dở cười. Trong
          cuộc sống, hãy hạn chế tối đa thói xấu này, người xưa nói rằng một
          bông lúa chín là một bông lúa biết cúi đầu, giá trị của một người chỉ
          thực sự lớn khi họ biết cách khiêm tốn. Câu chuyện khuyên ta hãy sống
          khiêm tốn. Đức độ và tài năng của mỗi người sẽ được bộc lộ qua việc
          làm chứ không bộc lộ qua lời nói. Thước đo giá trị con người không
          phải bằng tiền bạc mà bằng tài năng, trí tuệ và sự đóng góp, cống hiến
          của người đó đối với cộng đồng, xã hội. Bên cạnh đó, việc khoe khoang
          sẽ khiến cho trí tuệ của con người giảm sút, bởi họ chỉ quan tâm đến
          việc làm sao để đối phương biết những thứ mình có, dẫn tới sự lố bịch
          trong cách giao tiếp, ví dụ hình ảnh lợn cưới trong câu chuyện mang
          đầy tính châm biếm đả kích. Trí tuệ giảm sút, khiêm tốn không có rất
          dễ đi đên thất bại, trong cuộc sống không cần phải nói nhiều, tự họ sẽ
          nhìn nhận giá trị của bạn, và chỉ như vậy, bạn mới được công nhận. Như
          vậy “lợn cưới áo mới” tuy có cốt truyện đơn giản, không đặc sắc, nhưng
          không vì vậy mà mất đi nôi dung hay. Với tiếng cười châm biếm, tác
          phẩm phê phán thói khoe khoang của con người và khuyên chúng ta phải
          biết khiêm tốn trong cuộc sống. Truyện cười có những nét đặc trưng
          riêng không thể nhầm lẫn, bởi yếu tố gây cười cũng như nội dung hàm
          súc của nó. Đằng sau tiếng cười sảng khoái, người ta buộc phải ngẫm
          nghĩ, phải học hỏi và thay đổi. “Lợn cưới áo mới” mở đầu bằng tình
          huống trào phúng, Trong truyện, ta bắt gặp hai anh có tính khoe của
          gặp nhau. Một anh thì may được chiếc áo mới liền mặc ngay, mong được
          khen. Một anh thì muốn khoe với mọi người mình có con lợn cưới. Người
          có áo mới thì mặc ngay và đứng hóng ở cửa, đợi có ai đi qua người ta
          khen. Anh ta tức giận chỉ vì anh ta đã đứng từ sáng đến chiều mà chẳng
          có ai hỏi. Chi tiết “đứng hóng ở cửa” rất đắt. Nó lột tả được những
          điều đáng chê cười ở anh chàng này. Một cái áo mới thì có gì đâu mà
          đến nổi bỏ cả công ăn việc làm, chỉ “hóng” ở cửa để khoe. Khi có người
          mất lợn hỏi “Bác có thấy con lợn của tôi chạy qua đây không?” thì lẽ
          ra anh ta phải trả là “Tôi có thấy con lợn chạy qua đây” hoặc “Tôi
          không thấy con lợn nào chạy qua đây cả”. Câu trả lời của anh ta lại
          là: “Từ lúc tôi mặc cái áo mới này, tôi chẳng thấy con lợn nào chạy
          qua đây cả”. Với mọi người thì câu trả lời đó thừa thãi. Nhưng với anh
          ta thì có lẽ câu trả lời đó mới diễn đạt đúng đủ mục đích “khoe” của
          anh ta. Thật là buồn cười và lố bịch. Tình huống được xây dựng theo
          cách nói quá, lố bịch hơn so với hoàn cảnh thường thấy, nhằm mục đích
          nhấn mạnh vào bài học mà tác giả muốn đề cập. Đó là phê phán đả kích
          thói khoe khoang, khoe của. Đây là tính xấu phổ biến trong xã hội,
          thói khoe khoang khiến đối phương khó chịu và cảm giác không được
          thoải mái, thân thiện, dễ khiến chúng ta mất điểm trong mắt người
          khác. Trong câu chuyện, hai kẻ thích khoe khoang gặp nhau đã tạo thành
          một tình huống lố bịch, dở khóc dở cười. Trong cuộc sống, hãy hạn chế
          tối đa thói xấu này, người xưa nói rằng một bông lúa chín là một bông
          lúa biết cúi đầu, giá trị của một người chỉ thực sự lớn khi họ biết
          cách khiêm tốn. Câu chuyện khuyên ta hãy sống khiêm tốn. Đức độ và tài
          năng của mỗi người sẽ được bộc lộ qua việc làm chứ không bộc lộ qua
          lời nói. Thước đo giá trị con người không phải bằng tiền bạc mà bằng
          tài năng, trí tuệ và sự đóng góp, cống hiến của người đó đối với cộng
          đồng, xã hội. Bên cạnh đó, việc khoe khoang sẽ khiến cho trí tuệ của
          con người giảm sút, bởi họ chỉ quan tâm đến việc làm sao để đối phương
          biết những thứ mình có, dẫn tới sự lố bịch trong cách giao tiếp, ví dụ
          hình ảnh lợn cưới trong câu chuyện mang đầy tính châm biếm đả kích.
          Trí tuệ giảm sút, khiêm tốn không có rất dễ đi đên thất bại, trong
          cuộc sống không cần phải nói nhiều, tự họ sẽ nhìn nhận giá trị của
          bạn, và chỉ như vậy, bạn mới được công nhận. Như vậy “lợn cưới áo mới”
          tuy có cốt truyện đơn giản, không đặc sắc, nhưng không vì vậy mà mất
          đi nôi dung hay. Với tiếng cười châm biếm, tác phẩm phê phán thói khoe
          khoang của con người và khuyên chúng ta phải biết khiêm tốn trong cuộc
          sống.Truyện cười có những nét đặc trưng riêng không thể nhầm lẫn, bởi
          yếu tố gây cười cũng như nội dung hàm súc của nó. Đằng sau tiếng cười
          sảng khoái, người ta buộc phải ngẫm nghĩ, phải học hỏi và thay đổi.
          “Lợn cưới áo mới” mở đầu bằng tình huống trào phúng, Trong truyện, ta
          bắt gặp hai anh có tính khoe của gặp nhau. Một anh thì may được chiếc
          áo mới liền mặc ngay, mong được khen. Một anh thì muốn khoe với mọi
          người mình có con lợn cưới. Người có áo mới thì mặc ngay và đứng hóng
          ở cửa, đợi có ai đi qua người ta khen. Anh ta tức giận chỉ vì anh ta
          đã đứng từ sáng đến chiều mà chẳng có ai hỏi. Chi tiết “đứng hóng ở
          cửa” rất đắt. Nó lột tả được những điều đáng chê cười ở anh chàng này.
          Một cái áo mới thì có gì đâu mà đến nổi bỏ cả công ăn việc làm, chỉ
          “hóng” ở cửa để khoe. Khi có người mất lợn hỏi “Bác có thấy con lợn
          của tôi chạy qua đây không?” thì lẽ ra anh ta phải trả là “Tôi có thấy
          con lợn chạy qua đây” hoặc “Tôi không thấy con lợn nào chạy qua đây
          cả”. Câu trả lời của anh ta lại là: “Từ lúc tôi mặc cái áo mới này,
          tôi chẳng thấy con lợn nào chạy qua đây cả”. Với mọi người thì câu trả
          lời đó thừa thãi. Nhưng với anh ta thì có lẽ câu trả lời đó mới diễn
          đạt đúng đủ mục đích “khoe” của anh ta. Thật là buồn cười và lố bịch.
          Tình huống được xây dựng theo cách nói quá, lố bịch hơn so với hoàn
          cảnh thường thấy, nhằm mục đích nhấn mạnh vào bài học mà tác giả muốn
          đề cập. Đó là phê phán đả kích thói khoe khoang, khoe của. Đây là tính
          xấu phổ biến trong xã hội, thói khoe khoang khiến đối phương khó chịu
          và cảm giác không được thoải mái, thân thiện, dễ khiến chúng ta mất
          điểm trong mắt người khác. Trong câu chuyện, hai kẻ thích khoe khoang
          gặp nhau đã tạo thành một tình huống lố bịch, dở khóc dở cười. Trong
          cuộc sống, hãy hạn chế tối đa thói xấu này, người xưa nói rằng một
          bông lúa chín là một bông lúa biết cúi đầu, giá trị của một người chỉ
          thực sự lớn khi họ biết cách khiêm tốn. Câu chuyện khuyên ta hãy sống
          khiêm tốn. Đức độ và tài năng của mỗi người sẽ được bộc lộ qua việc
          làm chứ không bộc lộ qua lời nói. Thước đo giá trị con người không
          phải bằng tiền bạc mà bằng tài năng, trí tuệ và sự đóng góp, cống hiến
          của người đó đối với cộng đồng, xã hội. Bên cạnh đó, việc khoe khoang
          sẽ khiến cho trí tuệ của con người giảm sút, bởi họ chỉ quan tâm đến
          việc làm sao để đối phương biết những thứ mình có, dẫn tới sự lố bịch
          trong cách giao tiếp, ví dụ hình ảnh lợn cưới trong câu chuyện mang
          đầy tính châm biếm đả kích. Trí tuệ giảm sút, khiêm tốn không có rất
          dễ đi đên thất bại, trong cuộc sống không cần phải nói nhiều, tự họ sẽ
          nhìn nhận giá trị của bạn, và chỉ như vậy, bạn mới được công nhận. Như
          vậy “lợn cưới áo mới” tuy có cốt truyện đơn giản, không đặc sắc, nhưng
          không vì vậy mà mất đi nôi dung hay. Với tiếng cười châm biếm, tác
          phẩm phê phán thói khoe khoang của con người và khuyên chúng ta phải
          biết khiêm tốn trong cuộc sống.
        </h1>
      </div>
    </>
  );
};

export default ScrollProgress;