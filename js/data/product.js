// productData.js

const products = [{
        id: 1,
        name: "Marc Jacobs",
        price: 390000,
        image: "../images/nuochoa/marcJacobs.jpg",
        gioiTinh: "Nữ",
        luuHuong: "Về tổng thể, Marc Jacobs Eau So Fresh Pop EDT là chai nước hoa mùi mát nên độ lưu hương ở mức ổn khoảng 4 – 6 giờ tùy cơ địa mỗi bạn. Độ tỏa của em này trong khoảng 1 cánh tay. Do đó, khi sử dụng trong những môi trường kín như văn phòng vẫn rất phù hợp và không gây ảnh hưởng đến người xung quanh.",
        phongcach: "Những cô nàng dễ thương, năng động, nữ tính từ khoảng 20 tuổi sẽ rất phù hợp với mùi hương của Marc Jacobs Eau So Fresh Pop EDT. Hương thơm này sẽ mang đến cho bạn hình ảnh đáng yêu, trẻ trung và có phần tinh nghịch. Đây cũng là lựa chọn hoàn hảo cho những cô bạn muốn đổi gió so với những hương thơm quyến rũ đang sử dụng."
    },
    {
        id: 2,
        name: "Roja Burlington 1819",
        price: 750000,
        image: "../images/nuochoa/RojaBurlington.jpg",
        gioiTinh: "Nữ",
        luuHuong: "Không chỉ sở hữu mùi hương ấn tượng, cuốn hút, độ lưu hương của Roja Burlington 1819 được đánh giá rất tốt. Hương thơm sẽ tỏa xa trong khoảng 3 tiếng đầu và tỏa gần quanh cơ thể bạn trong khoảng 5 tiếng. Thời gian bám tỏa của em này sẽ lâu hơn khi bạn xịt lên quần áo.",
        phongcach: "Như đã đề cập trong phần đầu, Roja Burlington 1819 mang cảm giác sang trọng, hơi cổ điển. Do đó, hương thơm này sẽ phù hợp nhất với những anh chàng, cô nàng trưởng thành từ 25 tuổi trở lên, theo đuổi phong cách thanh lịch, sang trọng, tinh tế và yêu thích những mùi hương có chiều sâu, ấn tượng."
    },
    {
        id: 3,
        name: "Tom Ford Soleil Blanc EDP",
        price: 700000,
        image: "../images/nuochoa/3.1.png",
        gioiTinh: "Nữ",
        luuHuong: "Tom Ford Soleil Blanc EDP là sự kết hợp hài hòa giữa hương thơm thanh tao, nhẹ nhàng của hoa cỏ và sự ấm áp, quyến rũ của hương phương Đông.",
        phongcach: "Tom Ford Soleil Blanc EDP mang phong cách cuốn hút sang trọng và tinh tế dành cho các quý ông quý cô sành điệu. Phù hợp cho những người đàn ông và phụ nữ hiện đại, yêu thích sự tự do, phóng khoáng và muốn khẳng định đẳng cấp riêng."
    },
    {
        id: 4,
        name: "YSL Black Opium Eau De Parfum Extreme",
        price: 800000,
        image: "../images/nuochoa/3.2.jpg",
        gioiTinh: "Nữ",
        luuHuong: "YSL Black Opium Extreme EDP có thời gian lưu hương rất tốt từ 8 đến 12 tiếng. Độ toả hương trong vòng một cánh tay. Giúp các nàng tự tin xuất hiện đầy ấn tượng với hương thơm này trong suốt ngày dài",
        phongcach: "Với những cô nàng theo đuổi phong cách quyến rũ, ngọt ngào và nữ tính thì nước hoa YSL Black Opium Extreme EDP là một lựa chọn hoàn hảo. Mang đến một hương giúp các cô nàng gây được sự ấn tượng và nổi bật khi xuất hiện trong các bữa tiệc tùng. Mùi hương lưu luyến trên da đầy mịn màng là điểm nhấn cho mọi cô nàng tạo nên điểm nổi bật cho chính mình."
    },
    {
        id: 5,
        name: "Armaf Sterling Club De Nuit Milestone EDP",
        price: 780000,
        image: "../images/nuochoa/3.3.png",
        gioiTinh: "Nữ",
        luuHuong: "Nước hoa Armaf Sterling Club De Nuit Milestone EDP có độ lưu hương và tỏa hương khá tốt, duy trì mùi hương trên da và không gian xung quanh trong khoảng 6 – 8 tiếng. Đây là một thời gian tương đối dài một sản phẩm nước hoa.",
        phongcach: "Với sự kết hợp của hương biển và cam Bergamot, hương thơm này thích hợp cho những người đang tìm kiếm một phong cách tươi mới lại mạnh mẽ. Nó có thể thêm sự tự tin và sự quyết đoán vào bất kỳ trang phục nào, từ trang phục lịch sự đến trang phục hàng ngày. "
    },
    {
        id: 6,
        name: "Jean Paul Gaultier Classique Pin Up",
        price: 750000,
        image: "../images/nuochoa/3.4.jpg",
        gioiTinh: "Nữ",
        luuHuong: "Jean Paul Gaultier Classique Pin Up có độ lưu hương và tỏa hương khá tốt. Có khả năng duy trì mùi hương trên da của bạn trong khoảng thời gian từ 4 đến 6 tiếng. Tuy nhiên, độ lưu hương và thời gian tỏa hương có thể thay đổi tùy theo da của từng người và điều kiện môi trường.",
        phongcach: "Nếu bạn thích vẻ quyến rũ và gợi cảm, hương hoa cam và kẹo dẻo sẽ là lựa chọn hoàn hảo. Phong cách sang trọng sẽ vô cùng phù hợp với những nốt vani và hổ phách. Nước hoa Jean Paul Gaultier Classique Pin Up là một sự kết hợp linh hoạt của sắc thái hương thơm, giúp bạn thể hiện phong cách và cá tính của mình một cách độc đáo."
    },
    {
        id: 7,
        name: "Mancera Aoud Lemon Mint EDP",
        price: 780000,
        image: "../images/nuochoa/3.5.jpg",
        gioiTinh: "Nữ",
        luuHuong: "Mancera Aoud Lemon Mint EDP thuộc nhóm nước hoa sở hữu mùi hương gỗ thơm đặc trưng (Woody Aromatic), có độ lưu hương cao từ 8 – 12 tiếng, thậm chí có thể lên đến trên 12 tiếng tùy vào cơ địa của người sử dụng. Với khả năng tỏa hương xa, trong bán kính khoảng 2 mét, giúp bạn có thể tự tin tỏa sáng cả ngày. Để có thể giúp nước hoa lưu hương lâu hơn, bạn nên xịt nước hoa lên những vị trí có mạch máu lưu thông mạnh như: sau gáy, cổ tay, … ở khoảng cách cơ thể từ 20 – 30cm để đảm bảo hương thơm được tỏa đi đều.",
        phongcach: "Sở hữu hương thơm tươi mát, thanh lịch pha một chút ngọt ngào, quyến rũ, đầy sức hút, Mancera Aoud Lemon Mint EDP là dòng nước hoa unisex (có thể sử dụng như một chai nước hoa nam hoặc nước hoa nữ) – đặc biệt phù hợp với những người có phong cách trẻ trung, năng động. Bạn có thể sử dụng chai nước hoa này hằng ngày như: đi chơi, đi làm, đi học, đi dạo phố, … khi đó sẽ giúp bạn cảm thấy thoải mái, thư giãn. Hay sử dụng vào các dịp trang trọng hơn như: tham gia các buổi tiệc, các buổi gặp khách hàng – đối tác, … sẽ giúp bạn ghi điểm trong mắt người đối diện với hương thơm sang trọng, quý phái."
    },
    {
        id: 8,
        name: "Dior J’Adore Infinissime EDP",
        price: 980000,
        image: "../images/nuochoa/3.6.jpg",
        gioiTinh: "Nữ",
        luuHuong: "Dior J’Adore Infinissime EDP có độ lưu hương ổn khoảng 3 – 6 tiếng, với khả năng tỏa hương trong khoảng 1 cánh tay. Khả năng lưu hương trên da có thể có sự chênh lệch tùy thuộc vào kiểu da cùng các điều kiện về môi trường, thời tiết. Bạn có thể “dặm” lại mùi nước hoa khoảng 1 – 2 lần để giúp hương thơm được lưu giữ lâu hơn.",
        phongcach: "Dior J’Adore Infinissime EDP đặc biệt  phù hợp với những cô nàng thích sự nhẹ nhàng, thanh lịch và duyên dáng, nhưng cũng không kém phần gợi cảm, mê hoặc và tràn đầy tự tin. Bạn có thể sử dụng chai Dior J’Adore Infinissime vào mọi thời điểm trong ngày, nhưng đặc biệt thích hợp vào buổi tối, các buổi hẹn hò khi muốn tạo ấn tượng và thu hút sự chú ý. Chai nước hoa này cũng phù hợp với mọi mùa trong năm, nhưng đặc biệt nổi bật vào mùa thu và mùa đông, khi mùi hương ấm áp và lưu luyến của nó sẽ làm nổi bật sự nồng nàn và lãng mạn."
    },
    {
        id: 4,
        name: "Once Pherody",
        price: 590000,
        image: "../images/nuochoa/4.1.png",
        gioiTinh: "Nam",
        luuHuong: "Độ lưu hương của Once Pherody được đánh giá là khá lâu, với khả năng duy trì mùi hương trên da tầm 6 đến 8 giờ. Nước hoa unisex này có thể tồn tại trên da lâu hơn khi được xịt lên quần áo hoặc trong điều kiện khí hậu mát mẻ.",
        phongcach: "Với sự kết hợp của hương trái cây tươi mát và hoa cỏ sang trọng, Once Pherody phù hợp cho những dịp đặc biệt, buổi hẹn hò, hoặc sự kiện đêm. Nó mang đến sự lôi cuốn và quyến rũ, thích hợp cho những ai muốn tạo ấn tượng mạnh mẽ và tự tin."
    },
    {
        id: 5,
        name: "Calvin Klein Defy EDT",
        price: 390000,
        image: "../images/nuochoa/4.2.png",
        gioiTinh: "Nam",
        luuHuong: "Chai nước hoa nam Calvin Klein Defy EDT với độ lưu hương trung bình chỉ khoảng 2-3 giờ. Điều này có nghĩa là mùi hương sẽ phai dần sau vài giờ sử dụng nhưng vẫn đủ để để lại ấn tượng mạnh mẽ ban đầu.",
        phongcach: "Calvin Klein Defy EDT phù hợp với những người đàn ông hiện đại, tự tin và không ngại thể hiện bản thân. Mùi hương này vừa mang lại cảm giác sạch sẽ, mát mẻ, vừa giữ được sự nam tính và mạnh mẽ."
    }, {
        id: 6,
        name: "Louis Vuitton Météore EDP",
        price: 690000,
        image: "../images/nuochoa/4.3.jpg",
        gioiTinh: "Nam",
        luuHuong: "Độ lưu hương tạm ổn trong khoảng 3 – 6 tiếng hoặc có thể lâu hơn tùy vào loại da, điều kiện thời tiết và môi trường. Với độ tỏa hương trong khoảng 1 cánh tay, mùi hương này càng trở nên quyến rũ hơn trong những không gian hẹp, hoặc giao tiếp với khoảng cách gần.",
        phongcach: "Với hương thơm tươi mát, quyến rũ nên phù hợp nhất cho mùa xuân và mùa hạ. Bạn có thể sử dụng cho bất kỳ trường hợp nào như: đi học, đi chơi, đi làm, …"
    },
    {
        id: 7,
        name: "Mr. Burberry Indigo EDT",
        price: 800000,
        image: "../images/nuochoa/4.4.jpg",
        gioiTinh: "Nam",
        luuHuong: "Mr. Burberry Indigo EDT thuộc nhóm hương gỗ dành cho nam giới có độ lưu hương khá tốt khoảng 6 – 8 tiếng. Với độ lưu hương như trên, chàng có thể tự tin hoạt động cả ngày với khả năng tỏa hương trong khoảng 1 cánh tay. ",
        phongcach: "Mr. Burberry Indigo EDT là dòng nước hoa nam đặc biệt phù hợp với những quý ông thích sự nhẹ nhàng, tinh tế và lịch lãm, nhưng cũng không kém phần hiện đại và quyến rũ. Chàng có thể sử dụng Mr. Burberry Indigo EDT vào mọi thời điểm trong ngày, nhưng đặc biệt thích hợp vào mùa xuân và mùa hè, khi mùi hương tươi mát và trong lành của nó sẽ làm nổi bật sự sảng khoái và tự tin. Sử dụng mùi hương này trong những dịp đặc biệt như tiệc tùng hay cho các buổi hẹn quan trọng sẽ khiến chàng ghi được ấn tượng sâu đậm với đối phương bởi sự mạnh mẽ, lịch thiệp của mình."
    },
    {
        id: 8,
        name: "Chanel Allure Homme EDT",
        price: 850000,
        image: "../images/nuochoa/4.5.png",
        gioiTinh: "Nam",
        luuHuong: "Độ lưu hương của nước hoa Chanel Allure Homme EDT được đánh giá khá tốt. Thời gian lưu hương trung bình nước hoa hoạt động tốt trên da từ 6 – 8 giờ đồng hồ. Độ chênh lệch thời gian còn phụ thuộc vào nhiều yếu tố: thời tiết, nhiệt độ và cơ địa của từng người. Độ toả hương của nước hoa tương đối gần, trong phạm vi khoảng một cánh tay. Bạn có thể xịt dặm lại nước hoa trong ngày để lưu giữ hương thơm ấm áp này trong suốt ngày dài.",
        phongcach: "Đây là một mùi hương dành cho các chàng trai theo đuổi phong cách nam tính, lịch lãm và cuốn hút. Nước hoa Chanel Allure Homme EDT thích hợp cho các anh chàng có độ tuổi trung bình từ 25 tuổi trở lên. Một chai nước hoa tôn lên vẻ ấm áp, sâu lắng và sang trọng cho các chàng trai. Nếu bạn yêu thích một mùi hương nước hoa nồng ấm tinh tế thì chắc chắn nước hoa này là dành cho bạn"
    },
    {
        id: 9,
        name: "Prada Milano L’homme EDT",
        price: 860000,
        image: "../images/nuochoa/4.6.jpg",
        gioiTinh: "Nam",
        luuHuong: "Độ lưu hương của nước hoa Prada Milano L’homme EDT được đánh giá khá tốt. Thời gian lưu hương trung bình nước hoa hoạt động tốt trên da từ 6 – 8 tiếng. Độ chênh lệch thời gian còn phụ thuộc vào nhiều yếu tố: thời tiết, nhiệt độ và cơ địa của từng người. Đây là khoảng thời gian lý tưởng để bạn có thể hoạt động trong ngày mà không cần e ngại hương thơm phai nhanh.",
        phongcach: "Hoa cam Mùi hương nước hoa giúp cho các chàng trai tôn lên vẻ đẹp trưởng thành, điềm đạm, vô cùng ấm áp. Khiến cho bất cứ nơi nào mà anh chàng bước đến cũng để lại dấu ấn sâu đậm."
    },
    {
        id: 10,
        name: "Bvlgari Man Glacial Essence EDP",
        price: 950000,
        image: "../images/nuochoa/4.7.jpg",
        gioiTinh: "Nam",
        luuHuong: "Bvlgari Man Glacial Essence EDP được đánh giá có độ lưu hương khá tốt. Thời gian trung bình nước hoa hoạt động tốt khoảng tầm 6 – 8 tiếng. Sự chênh lệch thời gian sẽ phụ thuộc vào nhiều yếu tố tác động khác nhau: cơ địa, thời tiết, môi trường. Đây là khoảng thời gian phù hợp cho một mùi hương có tông gỗ dễ dùng. Độ toả hương của nước hoa toả tốt trong phạm vi một cánh tay. Bạn có thể thoải mái tham gia các hoạt động trong ngày mà không cần lo lắng mùi hương phai đi quá nhanh. ",
        phongcach: "Với tông hương gỗ thơm Bvlgari Man Glacial Essence EDP phù hợp cho những chàng trai từ 25 tuổi trở lên. Theo đuổi phong cách tươi mới, mạnh mẽ và phóng khoáng. Mùi hương mà chắc chắn khi các anh chàng khoác lên mình sẽ tôn lên nét trưởng thành, chững chạc. Vẻ đẹp của sự điềm đạm, vững chãi và thu hút. Hương thơm mà chỉ cần lướt quá cũng đủ khiến người ta lưu luyến."
    },
    {
        id: 11,
        name: "Lalique Encre Noire EDT",
        price: 900000,
        image: "../images/nuochoa/4.8.jpg",
        gioiTinh: "Nam",
        luuHuong: "Encre Noire thể hiện mùi hương của hai loại cỏ hương bài (Bourbon và Haitian), gỗ bách, gỗ Cashmere và xạ hương. Đây là một hương vị bí ẩn, cay nồng, có chút gì đó xấu xa, không phải là loại nước hoa tươi sáng, trong sạch như nước hoa Vetiver của Guerlain, mà nó mang lại cảm giác như mực cao cấp, đậm đặc, đen thẫm, được vẩy lên cơ thể của người đàn ông vững chài, mạnh mẽ. Đồng thời, hương vị của nó rất dễ nhận biết, hương gỗ bách thơm, mộc mạc mở đầu tổ hợp hương thơm này, trong khi đó xạ hương và gỗ Cashmere mang đến cảm giác ấm áp cho lớp hương nền.",
        phongcach: "Encre Noire thật sự là mùi hương phức tạp, ấn tượng dành cho nam, giúp bạn tôn lên nét đẹp bí ẩn của bản thân. Encre Noire lý tưởng cho bất cứ dịp giản dị nào, mùi hương đầy cám dỗ này sẽ làm toát lên nét gợi cảm, quyến rũ ẩn giấu bên trong bạn, giúp bạn trở nên tự tin và đầy nghị lực, sẵn sáng đối đầu với mọi thách thức."
    },

];