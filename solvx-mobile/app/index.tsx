import { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAppStore } from '../src/store/app-store';

export default function ConnectScreen() {
  const [peerId, setPeerId] = useState('78946551');
  const router = useRouter();
  const recentPeers = useAppStore(s => s.recentPeers);

  const handleConnect = useCallback(() => {
    const id = peerId.trim().replace(/\s+/g, '');
    if (!id) {
      Alert.alert('Error', 'Please enter a remote desktop ID');
      return;
    }
    router.push(`/remote/${id}`);
  }, [peerId, router]);

  const handleRecentPeer = useCallback((id: string) => {
    router.push(`/remote/${id}`);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Solvx</Text>
        <Text style={styles.subtitle}>Remote Desktop</Text>
      </View>

      <View style={styles.connectBox}>
        <Text style={styles.label}>Remote Desktop ID</Text>
        <TextInput
          style={styles.input}
          value={peerId}
          onChangeText={setPeerId}
          placeholder="Enter ID (e.g., 123 456 789)"
          placeholderTextColor="#666"
          keyboardType="number-pad"
          returnKeyType="go"
          onSubmitEditing={handleConnect}
          autoCorrect={false}
        />
        <Pressable
          style={({ pressed }) => [
            styles.connectButton,
            pressed && styles.connectButtonPressed,
          ]}
          onPress={handleConnect}
        >
          <Text style={styles.connectButtonText}>Connect</Text>
        </Pressable>
      </View>

      {recentPeers.length > 0 && (
        <View style={styles.recentSection}>
          <Text style={styles.recentTitle}>Recent</Text>
          <FlatList
            data={recentPeers}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={({ pressed }) => [
                  styles.peerCard,
                  pressed && styles.peerCardPressed,
                ]}
                onPress={() => handleRecentPeer(item.id)}
              >
                <Text style={styles.peerId}>{item.id}</Text>
                {item.alias ? (
                  <Text style={styles.peerAlias}>{item.alias}</Text>
                ) : null}
                <Text style={styles.peerPlatform}>
                  {item.platform || 'Unknown'}
                </Text>
              </Pressable>
            )}
          />
        </View>
      )}

      <Pressable
        style={styles.settingsLink}
        onPress={() => router.push('/settings')}
      >
        <Text style={styles.settingsLinkText}>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1a',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#10b981',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  },
  connectBox: {
    backgroundColor: '#1e1e2e',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  label: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2a2a3e',
    borderRadius: 8,
    padding: 14,
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
    letterSpacing: 1,
  },
  connectButton: {
    backgroundColor: '#10b981',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  connectButtonPressed: {
    backgroundColor: '#059669',
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  recentSection: {
    flex: 1,
  },
  recentTitle: {
    color: '#888',
    fontSize: 14,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  peerCard: {
    backgroundColor: '#1e1e2e',
    borderRadius: 8,
    padding: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  peerCardPressed: {
    backgroundColor: '#2a2a3e',
  },
  peerId: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontVariant: ['tabular-nums'],
  },
  peerAlias: {
    color: '#10b981',
    fontSize: 14,
  },
  peerPlatform: {
    color: '#666',
    fontSize: 12,
    marginLeft: 'auto',
  },
  settingsLink: {
    padding: 16,
    alignItems: 'center',
  },
  settingsLinkText: {
    color: '#666',
    fontSize: 14,
  },
});
