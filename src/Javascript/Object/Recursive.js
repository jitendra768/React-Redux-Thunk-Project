let objArray = [
    {
      data: [
        {
          accountNumber: "123456",
          status: "true",
        },
        {
          accountNumber: "123444",
          status: "false",
        },
      ],
  
      premisedData: null,
      isDefault: false,
    },
  ];
  
  const recursiveData = (arr) => {
    let result = [];
    arr.map((item) => {
      let parentData = {
        premisedData: item.premisedData,
        isDefault: item.isDefault,
      };
  
      item.data.map((it) => {
        result.push({ ...parentData, ...it });
      });
    });
    return result;
  };
  const res = recursiveData(objArray);
  console.log(res);
  