const products = [{
        id: 1,
        name: "SÔ CÔ LA ĐEN",
        price: 60000,
        image: "../images/nama choco/3.jpg",
        thanhphan: "Cacao 50%, bơ ca cao 35%, đường 14.3%, lecithin 0.7% ",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },
    {
        id: 2,
        name: "SOCOLA DÂU TÂY ĐÀ LẠT",
        price: 125000,
        image: "../images/nama choco/3.5.jpg",
        thanhphan: "Đường, Sữa khối (12%), Bơ Cacao (12%), Cacao khối 30%), Chất béo thực vật không Hydro hóa (cây cọ, cây hạt mỡ), chất nhũ hóa (Lecithin đậu nành, E476) và kết hợp cùng dâu tây",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },
    {
        id: 3,
        name: "SOCOLA CỐM XANH HÀ NỘI",
        price: 145000,
        image: "../images/nama choco/3.4.jpg",
        thanhphan: "Đường, Sữa khối (12%), Bơ Cacao (12%), Cacao khối 30%), Chất béo thực vật không Hydro hóa (cây cọ, cây hạt mỡ), chất nhũ hóa (Lecithin đậu nành, E476) và kết hợp cùng cốm xanh",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },
    {
        id: 4,
        name: "SOCOLA MACCA TÂY NGUYÊN",
        price: 125000,
        image: "../images/nama choco/3.3.jpg",
        thanhphan: "Đường, Sữa khối (12%), Bơ Cacao (12%), Cacao khối 30%), Chất béo thực vật không Hydro hóa (cây cọ, cây hạt mỡ), chất nhũ hóa (Lecithin đậu nành, E476) và kết hợp cùng macca",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },
    {
        id: 5,
        name: "HẠT DẺ CƯỜI",
        price: 125000,
        image: "../images/nama choco/3.2.jpg",
        thanhphan: "Đường, Sữa khối (12%), Bơ Cacao (12%), Cacao khối 30%), Chất béo thực vật không Hydro hóa (cây cọ, cây hạt mỡ), chất nhũ hóa (Lecithin đậu nành, E476) và kết hợp cùng hạt dẻ cười",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },
    {
        id: 6,
        name: "SOCOLA QUẾ",
        price: 125000,
        image: "../images/nama choco/3.1.jpg",
        thanhphan: "Đường, Sữa khối (12%), Bơ Cacao (12%), Cacao khối 30%), Chất béo thực vật không Hydro hóa (cây cọ, cây hạt mỡ), chất nhũ hóa (Lecithin đậu nành, E476) và kết hợp cùng quế",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },
    {
        id: 7,
        name: "SOCOLA HẠT DƯA",
        price: 125000,
        image: "../images/nama choco/3.7.jpg",
        thanhphan: "Đường, Sữa khối (12%), Bơ Cacao (12%), Cacao khối 30%), Chất béo thực vật không Hydro hóa (cây cọ, cây hạt mỡ), chất nhũ hóa (Lecithin đậu nành, E476) và kết hợp cùng hạt dưa",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },
    {
        id: 8,
        name: "SOCOLA HẠT BÍ",
        price: 125000,
        image: "../images/nama choco/3.6.jpg",
        thanhphan: "Đường, Sữa khối (12%), Bơ Cacao (12%), Cacao khối 30%), Chất béo thực vật không Hydro hóa (cây cọ, cây hạt mỡ), chất nhũ hóa (Lecithin đậu nành, E476) và kết hợp cùng hạt bí",
        baoquan: "Bảo quản ở nơi thoáng mát, nhiệt độ từ 7℃ đến 10℃, tránh ánh nắng trực tiếp, sử dụng ngon nhất trong tuần đầu mở hộp.",
        loai: "socolaThanh"
    },


    {
        id: 12,
        name: "Bột Cocoa",
        price: 190000,
        image: "../images/nama choco/bot.cacao.jpg",
        thanhphan: "228 kcal, Nước: 3g, Carbohydrate: 57.9g, Chất đạm: 19.6g, Chất béo: 13.7g, Chất xơ: 37g",
        baoquan: " Bảo quản nơi thoáng mát.",
        loai: "botCacao"
    },




    {
        id: 17,
        name: "Set event Tết",
        price: 550000,
        image: "../images/nama choco/set.1.jpg",
        thanhphan: "Bộ 2 thanh socola với hạt (dưa/bí), bột ca cao, socola bọc hạt óc chó và socola bọc hạt macca.",
        baoquan: " Bảo quản nơi thoáng mát.",
        loai: "cookie"
    },
    {
        id: 18,
        name: "Set event Valentine",
        price: 300000,
        image: "../images/nama choco/set.2.jpg",
        thanhphan: " Bộ 2 thanh socola rượu vang hoa hồng, tiramisu, socola viên rượu vang hoa hồng. ",
        baoquan: " Bảo quản nơi thoáng mát.",
        loai: "cookie"
    },
    {
        id: 19,
        name: "Set event Noel",
        price: 350000,
        image: "../images/nama choco/set.4.jpg",
        thanhphan: "Bộ 2 thanh socola quế và peppermint, bột ca cao, socola bọc hạt óc chó và socola bọc hạt macca.",
        baoquan: "Bảo quản ở nơi thoáng mát.",
        loai: "cookie"
    },


];