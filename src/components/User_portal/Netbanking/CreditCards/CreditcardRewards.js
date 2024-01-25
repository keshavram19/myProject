import React from "react";



const CreditcardRewards = () => {
    return (
        <div>

            <div className="container">
                <div className="row rewards_main" style={{ marginTop: '120px'}}>
                    <div className="col-xl-3 col-3">
                        <img src="https://a.cdn-hotels.com/gdcs/production171/d1558/d5250534-92b6-413c-bedf-2b9ac96e96fe.jpg?impolicy=fcrop&w=800&h=533&q=medium" className="rewards_img1" />

                    </div>
                    <div className="col-xl-3 col-3">
                        <img src="https://images.livemint.com/img/2020/09/10/600x338/43b0ebb4-eaa3-11ea-aeeb-bfe0af332d92_1598838553147_1598838738007_1598838831440_1599715325161.jpg" className="rewards_img2" />

                    </div>
                    <div className="col-xl-3 col-3">
                        <img src="https://images.indianexpress.com/2016/11/banks3.jpg" className="rewards_img3" />

                    </div>
                    <div className="col-xl-3 col-3">
                        <img src="https://shivalikbank.com/public/frontendassets/images/dabit-card2.png" className="rewards_img4" />

                    </div>
                    <div className="col-xl-12" style={{ marginTop: '80px' }}>
                        <h4>Your Savings Account/Credit Card Points</h4>

                        <table class="table mt-3">
                            <thead>
                                <tr className='' style={{ backgroundColor: '#d3d0cbff' }}>
                                    <th className="text-center">ISLAMIC BANK Savings/Credit Card Account Number</th>
                                    <th>Point Balance</th>
                                    <th>Redeem Now</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='shadow'>
                                    <td></td>
                                    <td className="text-center">-</td>
                                    <td style={{textDecoration:'underline'}}>Redeem Now</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                        <p className="mt-4"><b>Note :</b> The above-mentioned Reward Points are not eligible for cards such as Amazon Pay Credit Card,MakeMy Trip ISLAMIC Bank Platinum Credit Card, MakeMy Trip ISLAMIC Bank Signature Credit Card etc.For a detailed list of cards, <b> CLICK HERE</b> </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreditcardRewards;