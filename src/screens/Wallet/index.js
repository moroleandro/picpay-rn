import React, {useState} from 'react';
import {Feather, MaterialCommunityIcons, FontAwesome, AntDesign} from '@expo/vector-icons';
import {Switch} from 'react-native';
import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel, 
    UseBalance, 
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardTitle,
    CardDetails,
    CardInfo, 
    Img,
    AddButton,
    AddLabel,
    TicketContainer,
    TicketButton,
    TicketLabel
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet(){
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setIsBalance] = useState(true);

    function handleToggleVisible(){
        setIsVisible((prevState) => !prevState)
    }

    function handleToggleUseBalance(){
        setIsBalance((prevState) => !prevState)
    }

    return (
        <Wrapper>
            <Header colors={
                useBalance
                ? ['#52E78C', '#1AB563']
                : ['#D3D3D3', '#868686']
                }>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisible}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={30} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>
                <Switch value={useBalance} onValueChange={handleToggleUseBalance}></Switch>
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Formas de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de crédito
                            </CardTitle>
                            <CardInfo>
                                Cadastra seu cartão de crédito para poder fazer 
                                pagamentos mesmo quando não tiver saldo no seu PicPay.
                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard}  resizeMode="contain"/>
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>

                <TicketContainer>
                    <TicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                        <TicketLabel>Usar código promocional</TicketLabel>
                    </TicketButton>
                </TicketContainer>
            </PaymentMethods>
        </Wrapper>
    )
}