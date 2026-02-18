import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useAppStore } from '../src/store/app-store';

export default function SettingsScreen() {
  const rendezvousServer = useAppStore(s => s.rendezvousServer);
  const licenseKey = useAppStore(s => s.licenseKey);
  const setRendezvousServer = useAppStore(s => s.setRendezvousServer);
  const setLicenseKey = useAppStore(s => s.setLicenseKey);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Server</Text>

        <Text style={styles.label}>Rendezvous Server</Text>
        <TextInput
          style={styles.input}
          value={rendezvousServer}
          onChangeText={setRendezvousServer}
          placeholder="Default: rs-ny.rustdesk.com"
          placeholderTextColor="#666"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.hint}>
          Leave empty to use the default RustDesk server.
        </Text>

        <Text style={styles.label}>License Key</Text>
        <TextInput
          style={styles.input}
          value={licenseKey}
          onChangeText={setLicenseKey}
          placeholder="Optional"
          placeholderTextColor="#666"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.hint}>
          Required for self-hosted servers with license verification.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>Solvx Remote v1.0.0</Text>
        <Text style={styles.aboutSubtext}>
          Built on RustDesk protocol
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#1e1e2e',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#fff',
  },
  hint: {
    color: '#555',
    fontSize: 12,
    marginTop: 4,
  },
  aboutText: {
    color: '#ccc',
    fontSize: 16,
  },
  aboutSubtext: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
});
