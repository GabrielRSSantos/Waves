import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Contexto } from './Context';


export default function Waves({ navigation }) {
    const { data } = useContext(Contexto);

    console.log(data);

    return (
        <View style={styles.fundo}>

            <View style={styles.container}>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{
                            width: '100%',
                            height: 'auto',
                            flexDirection: 'row',
                            marginBottom: 5,
                            backgroundColor: item.id % 2 ? '#7FFFD4' : '#ADD8E6',
                            borderRadius: 5
                        }}>
                            <View>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: item.image
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nome: {item.nome}</Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Idade: {item.idade}</Text>
                                <Text>{item.lista[0]} / {item.lista[1]}</Text>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'flex-end' }}>ID: {item.id}</Text>
                            </View>
                        </View>

                    )}
                />

            </View>
            <TouchableOpacity
                style={styles.input}
                onPress={() => {
                    navigation.navigate('Levenshtein')

                }}
            >
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Levenshtein</Text>
            </TouchableOpacity>
        </View>

    );
};


const styles = StyleSheet.create({
    fundo: {
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'white',
        width: '80%',
        height: '70%',
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    box: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        marginBottom: 5,
    },
    input: {
        width: 150,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
});

{/* <View>
            <Image
            style={{width:100, height:100}}
            source ={{
                uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUVFRUVFRUVFRUVFRUVFhUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQGi0mHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALQBFwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADcQAAIBAgQEBAQFAwQDAAAAAAECAAMRBCExUQUSQWETInGBBpGh8DKxwdHhFEJSFZKy8SNicv/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAzEQABAwIEAwYGAgIDAAAAAAABAAIRAyEEEjFBBVFhcYGRsdHwEyIyocHhFGIj8RUzQv/aAAwDAQACEQMRAD8A8S0C7S7tF3vFpWaVdHhueIgwqtKlVlUs+cPSih1jFMy0xohaFIw4i9CMiGiXEQTLDTgJEwAIVOnGUoyESNqJgxlR1MSFtwlJrplBGFMG9IiaQcWitZhBoYwPIBUqYXLcIVNYykABCq86QushF0wplKpg/HgmqXlKSFLGBqNLO0A0pATKqxkBpDGN8O4e1Q6EL1YjL23iqlVtNpe8wB79hFTpue7K0Sff2QRFMcPLcTbw3DSahRj5V1I67Ad4VuFAvy58ut+ttvW8S7G0Acub/wA5u716axdO/hVy0EN3jv8ATrovFVuMVLct+00OFFiM4fjXAjTcG10Jyb9DsY1h6YUWjKT2PaHMMj37IWXEfEB+HUFx79lQyxXECPNBVaUdlSBZIJC3g3Wxg2eCLLQwqtWLhYZjOprC1QVCpSnLmlDKsm0uEqUt/TyY1edCgKsySQXkvShaS5xrw4ITQyFktQl6dKaD0pyUpUIgFnvRhKVKPvRl6GHgOMKiVGGo5Rg07R7DUMpTFU8pWdKLlmO0sjQTrnD0Uj2pmdHpy1WpBGQReZ69AVbLRSxRpoFbFGUp17ya1ISiJaZ24NrDZOONc4XTyvKs8AHnXm8aQsjnyUYGFRYWjw2obWXIi4Nxb59Jr4fguXmax7C4+czVcdh6X1PHdc+AkprMJiKn0sPfbzhYjiLVDPQYjgr2uhDdtDPP4imQSCCCOh1h0cTSrj/E4HzHaDf7IKlGrR/7Wx75iy0+C8N5/wDyNmoNgNzue03iNJbC0AqKo0AA9+ssVnj8XijiKpcdNuz3qvWYWg2jTDQL79qD1OWmc4iFKziszSFrJVSgIsQCDqDpPN8WwnhPl+FhcdtxPUIsT41gjUQBRdgwt6HI/pN/DsT8KuAT8pseXQ+P2lc7iGHFakbfMLj0715ynDVFFpqYT4fOrvbsuf1MPW4RTA/Gw7mxnfPF8I05c09gJHj6Lhf8ViXCQ37heSr084nUTOei4hgQlPmvc8wF8wLWOXrMGupmqjVZWBcwyJjyWSrRfRcGvEGJS8uplfDMgxsJboRhUkGpAzhJKAo3POkKJMJUnf6JtoanQPUR0Y1YxTqqeogSRstMrNNGDUTfpqp2lamAUy8yQ5Y6peMUqcb/ANPI0Mp4DLqImoUuSiobQGJN5FR4s9aIabqkNqchjLGpF6tWa2vsrXNVlGrxaq8GDClWE2XvOUXgVaM4cyEo1enQmrgeDh15ue3a1/nnL8LoqzANoQfnNijhhT0Jz3nJ4hjzSGRjofY6AyJIOshdPhuC+Mc7wC241gg2OgUYXDFUClua2htbLoIdbicRJBnmH1C9xc7U3XpmNDGho0CurQOPwSVR5hmND1HvGCi2HLzd72y9JKiUHOpPD2G40I9+Pgqc1rxDhI5FRyZSpSHVbyGIB6HtFBFKXdJLplbtDVBlOFMkeUi9r3MIFWXWkodJLADXKXC2hUTLPWQ4gF0qs10Jt4uU5j2ENWUnJcu5+s61sozTtRAoOIwiOvKw8oN7XtpMnjWCpLT8qAG4sc7977zZYxeogYi4Btvn7zVhMQ6k9pJOUGYBj9XhZsRhm1WOEDMREkezZeLqUYq9Kei+IEs4tpy/qbzIdZ7GhXFak2oBErx2JpGjVdTmY7kgacgCGqxcw0oIt5EqokwpVwm1EapG0tQoS1SjaE7Racy5cQRoYwmMYdYlaEQQRBSHOWhT4puI/RxiMJ5yo0qtXvEm5QL0eJw6sJj4nBMNMxAJj2U63E08NjA2sEsUWHUa0VqVZ6LG4NWFxMHE4IiGDCsJUvJBneDaTyywVdlKmN4Zs4kRC0TCUBXo+HVRzL6iejAyt9+08LTrEdZ7Th9fxKat1OvqNZ5zjFMy1+2n5H5Xf4JVEPp9Z/Hp4oiNbUftDBAZAWXCW0nDJld1SohBTPQaa2/OSliJfwyNQRfQ7/KBKWSqrLOcrcoNz8jOK2OlhCOuX1gTBsqJBhAIsO4l+Q5WNjuMpflyhFXP0kzWVF1lVvv+YtVPQRl1vlc97a27RevRVNNTmQc7ZbwmARM35flRpEwhObC0GB1hFW+fSUqNDCcEGq1pZadv1lRhQXDkm4y7fKMMYRIEAKErB+IkHKp7kfSecqtNb4jxl6nINF/MzzuIrT2HC2FuFYHb37ibLx/FHNfinEdB3jX0U1Gg1WDV4enOhCxQrhZEIoky4RQVoUK0K7iZdFo3nLN0wssqvOWpKupkokXlhJIuqVYC80Hp5Rc0YDnBFZVSGEhacIBC1SyVeliiO4jAKtM6oZCPbSJIuoCj4nBdRM2olptUcTfIyMRhw0a3qosYU5fD4dmYKoJJ0AjBom9rZ9J6r4cwYpKXdfO2Vj0HT3mbG4oYelm1Ow5/oan9rVgsK7E1MomNz7tJ0H6QMD8KAW8Zjfqq5W7E9Zt0MDTpC1NbDqLk++cuuIU3uxuNs89iJQ1vvOeSr4mvWP8AkcY5aDwsvV0MJSpfQ2Ou/jqioo/uJA6Ebwqr1uP19xFEqEaadR+0OlVT2Py/OZXBaCCiml1H/frLhiRYk+koA1rgZCOHFKy2IN7ZZaH1gO5uSXEiLT+EFR0k08jacoNsxluJiU+Nj+sbDMRpddx5Q1vlLp031Jy7CVWs3W4F0k21Mmm467n8rwBqhjyg79dRIae8/q0qhJUOAfNncafvApT/ALj6553jLm/395TloFjraRpJsEeYAXSoUsbDLc7SRT2+e8O6Abe0FUqqBtuSZcnSEQM6KjLEOJYgotlF3OSjoO57S9biHRBfv0/mCpUs+Zmux+gjqbcplw7uaZlJC8Vj+H10BZ0NtS34hn1NtPeY9R7z62FHLe4z0FibzzHH/htGVqtEBWUElAMnHW2x/OeiwvFw9wbWAE6Ead4vHjHYvPYrhBaC6iSeh17jv59q8UsZptF+aUNWd4LjArRWpIiArzpaOVt4dZoUaUToTQpmUXQrfIUvQg3UCFatlEMTigZndUkpAVq1WCDxNq1zLhpGturITfPCK0RDyRXmkQqLExVgZRq0GasFzZVQUxzQ9DE2yMzWqyrV5A2yhavQK2YYHMZgz0vC8WzpzEZg5noSM58+wuOsRfMXzHb1nuOE8SSooCAgDp0HvOLxmnNMEMkg/VyE6HtPcOfPscHdFUtLo/rzPMdg8Vp1Xub7jYSVq2Nx9f4gg4lg43H1nlzOq9LltCJ4lzc2z2nOiHVc979PScCphaFNWNjlBAMwEJICqlRwvKrWHoD7A7SFqONQpt1BIhcXTRRcDax7wSlRtl95yyR2n06+x2qhBEgK1TFWKrzcpvfl5gLjYHP5dbRdeG0Gqf1Jo3dredh5gFyFttIjx7giYgKGewuCALB1NsjTIItpobjtHqWFtTSm9Rm5RYknzNYWuSOukY5zWtBa48u7u8tuqSYnRZvFcY9RcRTTw0YFaZqNe3I6q2R6nMi2UBTVsHh+WnTes5KgknO7XPsBsP5k8Q4J4ngnmYJTqfhN2LtopbUm1z7SMVjqi0n5XswLKrOpvUIB6ZAD6TWxxDQxpkEyRcTsJi8WNtBPOYmW5I99gT3CuI1AL1uUP/gCCV7EC42jtTFudFt6meN+GeEtTY1XKlmJJzLtc7k2A16D3nq+YgZ0yB/l/IlY2kwVD8Mhw6CAOwTp3knco6cloLhB6696h/EOVxb73lGwpP4iTDWXWx9LmxkgjoLdgTMmaNPJaAYQlwwHU/KccONzLolr+Yn1Mk27/OQnqrkpY0CM1JnDFMNSD9DDVKSsLHTaCo4KmuiIO9hf3MOWkfN5fmVcmV4T4h4f4dQnLlcllA1HUgj3mHUE9f8AFeHoAg07CpfzKNLW1I0Bnlqqz2mBqGrh2uM94jTvPjN15DG0gys4DznW/Ib7baJQtOlisia1hXqaIjPPBWg6jQXMkI6tSVapWmfXe8K7RarM/wAKCkhUR4ZakWEKgjQE5rUYtKEyeWTyQ5RkIZaRYxhaMnw4SXKVKwFQGaBpyjUYBKElAwTcrqxUMAblehn0LAVqTqCtwpGgsOU7WE8KtKa3DK7UswLg6icnieHFZgcD8w05H99fFdXhWINN5aR8p1jUfrp4L1Yp9zCLRPeI4PiSPkGAP+JyP8zRQH7M8w8OYYdYr0ocCJBRERbWIN9wTKrRI6mFUSxU7fOKLyVSoEvroNL5wvPYWFh6DODruqDNhYak6X7TKxOPL5UxYdW0+QhMY5x+Xx2QxmHRRyCnZyOblJcXFMsOl2c2IFr9YjgsRTxTJiecjN1ABIBsbEkfesbXDgKRv9d7zFpUyHCLTXw1BqMSCGuclQD+24JO+U3U2gtcQb87aRfxS3tIMjyWvR46KlVqFyhQslzazbMh65AwWPZQAjVbcrhgoPiEgXA5r5kd95n4um71KP4VSkxP4fMb3BF77GDx2CWpiUqqApF1YgG9Rbde4zjG0KbXCDFp2Nx698IWh2gH4t99PunzUJbmUbXXQX7bTawHEyV5bC+hvr7iZBpFbgDMC47y9EcwBA5WHzv33iKjWvF0+Oa3QBsD6y7BTpTt6G30EzMNjrZOLHfofQ9I+rg6TKQ9lkUKroPT6wZp94cneDZSNRrn97SCTdRAdDBGiT1hzFsbi1pqXYgAfdvWG2TYIp3XnfiDAUqefMQ7ZhL365k3zAnmnELjMaajl2OZPyHQRZnnt8NTfTphtR0n3buXkMRVZUeSwQPd0J1ky6idNCzrcatAtViTVZyPBzrPCYdoNpDPOSWmNVkpQ6pLUxLyQjBhDtJAnGWvIhe9XU5SjuJVnitVpCUoGUwHzjCUSZm0nzm/w9wRMGKrGmJW7C4cVdSh08LHv6ayw9MCdiqoAnDq4h9Qrs0aTKdhqvM8SFjPSfCLYh1LFiUGS3F7n11mFiaJc2GpNh7z6FgsP4VJaYyCjPueucfja7Rh2sIknpMR5bJWEov/AJLnzbt19YvqgtXqDov1gHr12OoHoP1MeKEntv8AtOfIBQOuW84QtaLrtSOSyzgs+ZySe8OKVhp7Q5a2v4j9Jy0yb9tfeHJciJjVDoUc7nO33aAxQuTHSthFnWC115V9Uk1HzCUNGzRzkzkumYjQ9UBcKPCuB20nLRv2I+84wiyKi2II0P5xecq0FqV9RONC2YJHpGciO+/6WkESs5VKlMsev0v+U6qz2vkxtlqPYyKjBSCpsbfLf1hKbAjKG9uQ6Aqa3Xiq/wAYVTcCkqnTMlrH0ymJjcfUqm9Rydhpb0ELx+lyYmqNPNf/AHDm/WIEz2GGw9BrQ+m0CQDz1vqbryGKr1yTTqPJgkbDQ8gAFW8sonCEUTUsMqyrOhUWdCBV50MmSsEWnB4Eq4TF5ZGgGecjy1IhaC1JBeLK8tzywqLkfmlgYDnkeJCQIzGK1TCF4Co0oogExhsNzTXwycsycNi+WXOOuZzMS2o+2y6+FNGm3MTcr0C1YPEVriIGv5YsuLnNbQJW9zmApvD4gCol/wDNf+Qn0gUw3mZrDYamfI2xVnDCx5bNY6ZG+c9RwT4hr1qyo3Jym5NgQQADpn6QsTh6gb8RgEAXk8um/wC0rD4theaZ1JtAXscaQLAEZaRQN1zJOkHWxADWyudBe5MawOH5iSdbf7ZxG0i4wNTK7IhjboaU16nPrlp6Sra2Gl8/2lq9gSBv/wBwK1BcC2+e5hG8iNOXgrCYeLlTfTIamFJkIuZz2y3iW2RbKop3IzHvleUqD23hxTubDa+coxtnDBQhSLW/Dn1MmotwQfX9pANhLlGA5jax9bwSSilDpHMZ20z22Ml8753z13lS/W2eWkupFu+9+m1oTwJkKoUUMOr35t5ViL5Lawzz1ksCM1JB67TOxOIstR1YMyq2Q3APT1hsLiC0Rf3rsrGsleB4/ihVxFRxoWsPRRy3+kzwYTlgmnt20xTaGDQCPBeJrPNRxedzPirqYZDFkMOrRgSiE2hnQSNOhQhhLuIO8O5gIJCZCsphFkUqRPQxtMI0oBA4oF5HiRtsGYBsF3kkIULxJcPCrgxvCDCDeXKtL88o5jpwcE2EkJVykS0hXzjTYMyv9IYKuVQ12lOeGOHMC1Iwcg2TC8nUqyRuhVKm6kgjQiJKp2hFaWGDQhC0wZC9Z8KYumHqPWqAGygFjmbk3tfrpPSvx2mo8tRAP/oHXrPl7VJS8w1+HCq8vDyJjTkABHRdShxA02BpaDrqeZm9l9AxHxDQXWoD2XM/SZtL4p569NVWylxctqb5CwGmdp5IiD0NxqMxFM4TQaLyT1299qN/FazjYADpr2f6C+wuS3mt295yrdhYAenpEOD40VqKVP7iADnlzaEW9ZovScG/LYbA5zzJY5pIdtrqu8HAgEb6KGBB2IgqwJsBqx1MKpvY6j62lah6jpFCAUYXVsPUUXteKvVFiTqMszpG3xrZ2W1xmSb9Np5f4ir3sgP/ALNvfpNuEwxxNUMbad9YA1PvdZ62I/j0jUft9zy97SvQo1gLdJepVvbIC22nvPH4D4hameWoC69D/cP3mvQ+IqLZHnX2BH0j6vDsVSJaGyOY09UmlxHCvAdmA6Gx9PutChxGmebzLdS3ML6WOeW0+bvVu7MCRdibjI5kmafEaANR2U3BYkH1z/WZtSlad7h+DZQBcCfmAsRpb1PvVcXGY41nBpEZSbg67T4dv4QHgGSOIl4ZcLOjErnucFnpThPDmgMOJJowssJeZZs6O1KE6VCJF/04DUziKS7TLrYlm1JizRcKyVrvxNBoJT/UydBMi0MhlwFS0GxjbxWpiW3kCVcSi1RWXENvCrXbeKgS4khSU4mIbeE8Y7xJGjFMxLzBVFWau0kYg7SGWBaW1yGUY4ntKnEjaLFpBjhdG1OriVludTtM0iUMKEWVangqZBw0QWqd4ZMSd5SuYR2w5gnoGHpViekaRbwcpOiEvTPwxxfwCVe/IcwQL8rb22nvaOM8RQVcFT1FtJ87bDiMYDiLUeYKcmBy6A2sGHecnH8JFYmqz6vsfT9d66mC4l8ICnU+nnuPUdF7rA4tG5uQ3COUPXMfnrEm47SOKbD2sMgDew5v7l7fwZ43hPE3oMStiGGY6dj6iBd7Hnv5r81+973iG8JAe+T8u3b16dOvROPFpa0gXn5uzp2r2vG+JCl5BYtnyjYf5GeSq1SSSTcnUxOpjGdizMST1MkVZ1sFhG4dsj6jqfIDoPvuubjsW7EO/qNB+T1P2261qi5h8O9oJzBrUjnkrGtRnFojVEmmZNUxbSZUVKQjC1AIg1WV8eaWyqAKdepLUjeIK8bpGHKbksmGSdODToMoF56ROnRaNUMuk6dIqKLKGTOhKKFlpM6AUChYenOnRL1EUxepOnSMUCBLLOnRzU1q4wbTp0YiVZdJ06AgK08NGA5nTo0aJZVvEMTrOZ06C42UaqkwNaoZE6J2TF1KMCdOhtQlXEHUnTpZQpinpBYpzadOihqpulFlbzp0fsmNRqUYUyZ0gTNlK1DOnToJSCv/2Q=="
            }}
            />
</View> */}