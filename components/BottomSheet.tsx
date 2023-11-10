import { Button, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const { dismiss } = useBottomSheetModal();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      ref={ref}
      snapPoints={snapPoints}
    >
      <View>
        <Text>Bottom sheet</Text>
        <Button title="Dismiss" onPress={() => dismiss()} />
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({});
