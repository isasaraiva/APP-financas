import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti/build";

interface SaldoEgastosProps {
  saldo: string;
  gastos: string;
}

export default function Balance({ saldo, gastos }: SaldoEgastosProps) {
  return (
    <MotiView 
    style={styles.container}
    from={{
      rotateX: '-100deg',
      opacity: 0,
    }}
    animate={{
      rotateX: '0deg',
      opacity: 1,
    }}
    transition={{
      type: 'timing',
      delay: 300,
      duration: 900,
    }}
    >

      <View>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>9.245,00</Text>
        </View>
      </View>
        
        <View>   
          <Text style={styles.itemTitle}>Gastos</Text>
          <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>

          </View>
        </View>
      </MotiView>
    
  );
}



class Resultados implements SaldoEgastosProps {
  Saldo: number;
  Gastos: number;
  constructor(public saldo, public gastos) {
    this.Saldo = saldo
    this.Gastos = gastos;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    
  },
  subitem: {
    fontSize: 16,
    color: "#DADADA",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#DADADA",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c",
  }
});
