console.log("Products frontend javascript file");

$(function () {
  $("#process-btn").on("click", () => {
    $(".product-form-section").slideToggle(500);
    $("#process-btn").css("display", "none");
  });

  $("#cancel-btn").on("click", () => {
    $(".product-form-section").slideToggle(100);
    $("#process-btn").css("display", "inline-flex");
  });

  $(".product-search-input").on("input", function () {
    const keyword = $(this).val().toLowerCase().trim();

    $(".product-row").each(function () {
      const rowText = $(this).text().toLowerCase();
      $(this).toggle(rowText.includes(keyword));
    });
  });

  $(".new-product-status").on("change", async function (e) {
    const id = e.target.id;
    const productStatus = $(`#${id}.new-product-status`).val();

    try {
      const response = await axios.post(`/admin/product/${id}`, {
        productStatus: productStatus,
      });
      const result = response.data;

      console.log("response:", result);

      if (result.data) {
        console.log("Product updated");
        $(".new-product-status").blur();
      } else alert("Product update failed");
    } catch (err) {
      console.log(err);
      alert("Product update failed");
    }
  });
});

function validateForm() {
  const productName = $(".product-name").val(),
    productPrice = $(".product-price").val(),
    productLeftCount = $(".product-left-count").val(),
    productCollection = $(".product-collection").val(),
    productSize = $(".product-size").val(),
    productDesc = $(".product-desc").val(),
    productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productSize === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details");
    return false;
  }

  return true;
}

function previewFileHandler(input, order) {
  const imgClassName = input.className.split(" ")[0],
    file = $(`.${imgClassName}`).get(0).files[0],
    fileType = file["type"],
    validImageType = ["image/jpg", "image/jpeg", "image/png"];

  if (!validImageType.includes(fileType)) {
    alert("Please insert only jpg, jpeg and png!");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
