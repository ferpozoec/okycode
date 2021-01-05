
export const PaymentService = {
   execute: async function (amount, customer,card)  {
        let result = null

        try {
          const backendUrl = process.env.SERVICE_URL
          const apiKey = process.env.SERVICE_API_KEY
          const url = `${backendUrl}/payment`
          
          const opc = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${apiKey}`
            },
            body: JSON.stringify({
              amount : amount,
              customerId: customer,
              card : card,
              description : "Services from App. This message is autogenerated"
            })
          }

          const response = await fetch(url, opc)
          result = await response.json() 
          result = result.message
        } catch (error) {
            result = null;
            console.error(error);
        }

        return result
    }
}